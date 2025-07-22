import { Module } from '@nestjs/common';
import { UserMoviesService } from './user_movies.service';
import { UserMoviesController } from './user_movies.controller';

@Module({
  controllers: [UserMoviesController],
  providers: [UserMoviesService],
})
export class UserMoviesModule {}
