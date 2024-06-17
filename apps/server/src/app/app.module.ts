import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingModule } from './building/building.module';
import { PrismaService } from '@city-up/my-prisma-client';

@Module({
  imports: [BuildingModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
