// movie-genre.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovieGenreService } from './movie_genres.service';
import { CreateMovieGenreDto } from './dto/create-movie_genre.dto';
import { UpdateMovieGenreDto } from './dto/update-movie_genre.dto';

@Controller('movie-genres')
export class MovieGenreController {
  constructor(private readonly movieGenreService: MovieGenreService) {}

  @Post()
  create(@Body() createMovieGenreDto: CreateMovieGenreDto) {
    return this.movieGenreService.create(createMovieGenreDto);
  }

  @Get()
  findAll() {
    return this.movieGenreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieGenreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieGenreDto: UpdateMovieGenreDto) {
    return this.movieGenreService.update(+id, updateMovieGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieGenreService.remove(+id);
  }
}
