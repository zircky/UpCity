import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingModule } from './building/building.module';
import { PrismaService } from '@city-up/my-prisma-client';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: `${path}/uploads`,
    serveRoot: '/uploads',
  }),
    BuildingModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
