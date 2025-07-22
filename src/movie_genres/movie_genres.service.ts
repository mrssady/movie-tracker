import { Injectable } from '@nestjs/common';
import { CreateMovieGenreDto } from './dto/create-movie_genre.dto';
import { UpdateMovieGenreDto } from './dto/update-movie_genre.dto';

@Injectable()
export class MovieGenresService {
  create(createMovieGenreDto: CreateMovieGenreDto) {
    return 'This action adds a new movieGenre';
  }

  findAll() {
    return `This action returns all movieGenres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movieGenre`;
  }

  update(id: number, updateMovieGenreDto: UpdateMovieGenreDto) {
    return `This action updates a #${id} movieGenre`;
  }

  remove(id: number) {
    return `This action removes a #${id} movieGenre`;
  }
}
