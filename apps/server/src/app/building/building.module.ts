import { Module } from '@nestjs/common';

import { BuildingController } from './building.controller';
import { BuildingService } from '@city-up/data-access-building';
import { PrismaService } from '@city-up/my-prisma-client';

@Module({
  controllers: [BuildingController],
  providers: [BuildingService, PrismaService],
})
export class BuildingModule {}
