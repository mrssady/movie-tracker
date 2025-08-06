// watch-status.module.ts
import { Module } from '@nestjs/common';
import { WatchStatusController } from './watch_statuses.controller';
import { WatchStatusService } from './watch_statuses.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [WatchStatusController],
  providers: [WatchStatusService, PrismaClient],
  exports: [WatchStatusService],
})
export class WatchStatusesModule {}
