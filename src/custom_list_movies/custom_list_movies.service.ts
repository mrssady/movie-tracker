import { Injectable } from '@nestjs/common';
import { CreateCustomListMovieDto } from './dto/create-custom_list_movie.dto';
import { UpdateCustomListMovieDto } from './dto/update-custom_list_movie.dto';

@Injectable()
export class CustomListMoviesService {
  create(createCustomListMovieDto: CreateCustomListMovieDto) {
    return 'This action adds a new customListMovie';
  }

  findAll() {
    return `This action returns all customListMovies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customListMovie`;
  }

  update(id: number, updateCustomListMovieDto: UpdateCustomListMovieDto) {
    return `This action updates a #${id} customListMovie`;
  }

  remove(id: number) {
    return `This action removes a #${id} customListMovie`;
  }
}
