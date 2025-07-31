// custom-list-movie.module.ts
import { Module } from '@nestjs/common';
import { CustomListMovieController } from './custom_list_movies.controller';
import { CustomListMovieService } from './custom_list_movies.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CustomListMovieController],
  providers: [CustomListMovieService, PrismaClient],
  exports: [CustomListMovieService],
})
export class CustomListMovieModule {}
