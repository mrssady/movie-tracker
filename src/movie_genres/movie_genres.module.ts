// movie-genre.module.ts
import { Module } from '@nestjs/common';
import { MovieGenreController } from './movie_genres.controller';
import { MovieGenreService } from './movie_genres.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [MovieGenreController],
  providers: [MovieGenreService, PrismaClient],
  exports: [MovieGenreService],
})
export class MovieGenreModule {}
