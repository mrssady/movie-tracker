// watch-status.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WatchStatusService } from './watch_statuses.service';
import { CreateWatchStatusDto } from './dto/create-watch_status.dto';
import { UpdateWatchStatusDto } from './dto/update-watch_status.dto';

@Controller('watch-statuses')
export class WatchStatusController {
  constructor(private readonly watchStatusService: WatchStatusService) {}

  @Post()
  create(@Body() createWatchStatusDto: CreateWatchStatusDto) {
    return this.watchStatusService.create(createWatchStatusDto);
  }

  @Get()
  findAll() {
    return this.watchStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.watchStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWatchStatusDto: UpdateWatchStatusDto) {
    return this.watchStatusService.update(+id, updateWatchStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.watchStatusService.remove(+id);
  }
}
