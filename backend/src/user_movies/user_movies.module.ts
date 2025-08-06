// src/user_movies/user_movies.module.ts
import { Module } from '@nestjs/common';
import { UserMovieService } from './user_movies.service';
import { UserMovieController } from './user_movies.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule],
  controllers: [UserMovieController],
  providers: [UserMovieService],
})
export class UserMoviesModule {}
