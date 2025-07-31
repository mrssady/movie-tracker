import { IsInt } from 'class-validator';

export class CreateCustomListMovieDto {
  @IsInt()
  listId: number;

  @IsInt()
  movieId: number;
}
