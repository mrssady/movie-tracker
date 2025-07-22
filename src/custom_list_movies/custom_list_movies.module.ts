import { Module } from '@nestjs/common';
import { CustomListMoviesService } from './custom_list_movies.service';
import { CustomListMoviesController } from './custom_list_movies.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CustomListMoviesController],
  providers: [CustomListMoviesService, PrismaService],
})
export class CustomListMoviesModule {}
