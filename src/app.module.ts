import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UserMovie } from './user_movies/entities/user_movie.entity';
import { WatchStatus } from './watch_statuses/entities/watch_status.entity';
import { Movie } from './movies/entities/movie.entity';
import { MovieGenre } from './movie_genres/entities/movie_genre.entity';
import { Genre } from './genres/entities/genre.entity';
import { CustomList } from './custom_lists/entities/custom_list.entity';
import { CustomListMovie } from './custom_list_movies/entities/custom_list_movie.entity';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    User,
    UserMovie,
    WatchStatus,
    Movie,
    MovieGenre,
    Genre,
    CustomList,
    CustomListMovie,
    PrismaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
