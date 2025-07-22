import { Module } from '@nestjs/common';
import { CustomListsService } from './custom_lists.service';
import { CustomListsController } from './custom_lists.controller';

@Module({
  controllers: [CustomListsController],
  providers: [CustomListsService],
})
export class CustomListsModule {}
