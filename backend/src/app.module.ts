// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserMoviesModule } from './user_movies/user_movies.module'; 

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, UserMoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
