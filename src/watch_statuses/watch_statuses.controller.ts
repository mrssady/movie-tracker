import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WatchStatusesService } from './watch_statuses.service';
import { CreateWatchStatusDto } from './dto/create-watch_status.dto';
import { UpdateWatchStatusDto } from './dto/update-watch_status.dto';

@Controller('watch-statuses')
export class WatchStatusesController {
  constructor(private readonly watchStatusesService: WatchStatusesService) {}

  @Post()
  create(@Body() createWatchStatusDto: CreateWatchStatusDto) {
    return this.watchStatusesService.create(createWatchStatusDto);
  }

  @Get()
  findAll() {
    return this.watchStatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.watchStatusesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWatchStatusDto: UpdateWatchStatusDto) {
    return this.watchStatusesService.update(+id, updateWatchStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.watchStatusesService.remove(+id);
  }
}
