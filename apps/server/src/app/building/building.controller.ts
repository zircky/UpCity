import { Controller, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { BuildingService } from '@city-up/data-access-building';

@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @HttpCode(200)
  @Post()
  create() {
    return this.buildingService.create();
  }

  @Get()
  findAll() {
    return this.buildingService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingService.getById(+id);
  }

  //@UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Patch(':id/upgrade')
  update(
    @Param('id') id: string,
  ) {
    return this.buildingService.update(+id);
  }
}
