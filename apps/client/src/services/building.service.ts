import { Building } from '@prisma/client';
import { axiosClassic, instance } from '../api/api.interceptor';

const build = 'building';

export interface IBuilder {

}

export const BuildingService = {
  async getAll() {
    return axiosClassic<Building[]>({
      url: build,
      method: 'GET'
    });
  },

  async getById(id: number | string) {
    return instance<Building>({
      url: `${build}/${id}`,
      method: 'GET'
    });
  },

  async create() {
    return instance<Building>({
      url: build,
      method: 'POST'
    })
  },

  async update(id: number) {
    return instance<Building>({
      url: `${build}/${id}`,
      method: 'PUT',
  })}
};
