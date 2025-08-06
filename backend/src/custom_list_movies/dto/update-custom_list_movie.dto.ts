import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomListMovieDto } from './create-custom_list_movie.dto';

export class UpdateCustomListMovieDto extends PartialType(CreateCustomListMovieDto) {}
