import { Prisma } from '@prisma/client';

export const returnBuildingObject: Prisma.BuildingSelect = {
  id: true,
  name: true,
  level: true,
  revenue: true,
  upgradeCost: true
}
