import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { GenreModule } from './genre/genre.module';
import { MoviegenreModule } from './moviegenre/moviegenre.module';
import { WatchstatusModule } from './watchstatus/watchstatus.module';
import { UsermovieModule } from './usermovie/usermovie.module';
import { CustomlistModule } from './customlist/customlist.module';
import { CustomlistmovieModule } from './customlistmovie/customlistmovie.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genres.module';
import { MovieGenresModule } from './movie_genres/movie_genres.module';
import { WatchStatusesModule } from './watch_statuses/watch_statuses.module';
import { UserMoviesModule } from './user_movies/user_movies.module';
import { CustomListsModule } from './custom_lists/custom_lists.module';
import { CustomListMoviesModule } from './custom_list_movies/custom_list_movies.module';

@Module({
  imports: [UserModule, MovieModule, GenreModule, MoviegenreModule, WatchstatusModule, UsermovieModule, CustomlistModule, CustomlistmovieModule, UsersModule, MoviesModule, GenresModule, MovieGenresModule, WatchStatusesModule, UserMoviesModule, CustomListsModule, CustomListMoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
