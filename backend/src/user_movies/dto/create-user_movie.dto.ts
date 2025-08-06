import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreateUserMovieDto {
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

  // userId will be assigned in controller or service, so no validation here
  userId: number;
}
