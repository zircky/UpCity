import { Injectable } from '@nestjs/common';
import { PrismaService } from '@city-up/my-prisma-client';

import { returnBuildingObject } from './return-building.object';

@Injectable()
export class BuildingService {
  constructor(private prisma: PrismaService) {
  }

  async getAll() {
    return this.prisma.building.findMany({
      select: returnBuildingObject
    });
  }

  async getById(id: number){
    return this.prisma.building.findUnique({
      where: { id },
      select: returnBuildingObject
    });
  }

  async create() {
    return this.prisma.building.create({ data: {
        name: '',
        revenue: 0,
        level: 0,
        upgradeCost: 0,
        imageUrl: '',
        upgradeTime: 0
      } });
  }

  async update(id: number){
    const building = await this.prisma.building.findUnique({ where: { id } });
    if (building) {
      return this.prisma.building.update({
        where: { id },
        data: {
          level: building.level + 1,
          revenue: building.revenue * 1.5,
          upgradeCost: building.upgradeCost * 2,
          imageUrl: building.imageUrl,
          upgradeTime: building.upgradeTime * 25
        }
      });
    }
    throw new Error('Building not found');
  }
}
