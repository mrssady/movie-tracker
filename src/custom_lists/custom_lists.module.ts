// custom-list.module.ts
import { Module } from '@nestjs/common';
import { CustomListController } from './custom_lists.controller';
import { CustomListService } from './custom_lists.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CustomListController],
  providers: [CustomListService, PrismaClient],
  exports: [CustomListService],
})
export class CustomListModule {}
