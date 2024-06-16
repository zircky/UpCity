import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { MyPrismaClientModule } from '@city-up/my-prisma-client';

@Module({
  controllers: [],
  providers: [BuildingService],
  exports: [BuildingService],
  imports: [MyPrismaClientModule],
})
export class DataAccessBuildingModule {}
