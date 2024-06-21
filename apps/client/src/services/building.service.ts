
import { axiosClassic, instance } from '../api/api.interceptor';

const build = 'building';

export interface IBuilding {
  id: number
  name: string
  level: number
  revenue: number
  upgradeCost: number
  imageUrl: string
  upgradeTime: string
}

export const BuildingService = {
  async getAll() {
    return axiosClassic<IBuilding[]>({
      url: build,
      method: 'GET'
    });
  },

  async getById(id: number | string) {
    return instance<IBuilding>({
      url: `${build}/${id}`,
      method: 'GET'
    });
  },

  async create() {
    return instance<IBuilding>({
      url: build,
      method: 'POST'
    })
  },

  async update(id: number) {
    return instance<IBuilding>({
      url: `${build}/${id}`,
      method: 'PUT',
  })}
};
