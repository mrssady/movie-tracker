import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreateUserMovieDto {
  @IsInt()
  userId: number;

  @IsInt()
  movieId: number;

  @IsInt()
  statusId: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10)
  rating?: number;

  @IsOptional()
  @IsString()
  review?: string;
}
