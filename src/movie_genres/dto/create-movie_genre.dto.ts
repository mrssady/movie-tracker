import { IsInt } from 'class-validator';

export class CreateMovieGenreDto {
  @IsInt()
  movieId: number;

  @IsInt()
  genreId: number;
}
