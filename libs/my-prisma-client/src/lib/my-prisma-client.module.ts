import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [PrismaService]
})
export class MyPrismaClientModule {}
