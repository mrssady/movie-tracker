// user-movie.module.ts
import { Module } from '@nestjs/common';
import { UserMovieController } from './user_movies.controller';
import { UserMovieService } from './user_movies.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UserMovieController],
  providers: [UserMovieService, PrismaClient],
  exports: [UserMovieService],
})
export class UserMovieModule {}
