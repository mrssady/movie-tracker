import { Injectable } from '@nestjs/common';
import { CreateWatchStatusDto } from './dto/create-watch_status.dto';
import { UpdateWatchStatusDto } from './dto/update-watch_status.dto';

@Injectable()
export class WatchStatusesService {
  create(createWatchStatusDto: CreateWatchStatusDto) {
    return 'This action adds a new watchStatus';
  }

  findAll() {
    return `This action returns all watchStatuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} watchStatus`;
  }

  update(id: number, updateWatchStatusDto: UpdateWatchStatusDto) {
    return `This action updates a #${id} watchStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} watchStatus`;
  }
}
