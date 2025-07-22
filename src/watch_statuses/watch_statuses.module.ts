import { Module } from '@nestjs/common';
import { WatchStatusesService } from './watch_statuses.service';
import { WatchStatusesController } from './watch_statuses.controller';

@Module({
  controllers: [WatchStatusesController],
  providers: [WatchStatusesService],
})
export class WatchStatusesModule {}
