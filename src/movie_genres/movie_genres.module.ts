import { Module } from '@nestjs/common';
import { MovieGenresService } from './movie_genres.service';
import { MovieGenresController } from './movie_genres.controller';

@Module({
  controllers: [MovieGenresController],
  providers: [MovieGenresService],
})
export class MovieGenresModule {}
