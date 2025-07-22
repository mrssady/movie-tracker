import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovieGenresService } from './movie_genres.service';
import { CreateMovieGenreDto } from './dto/create-movie_genre.dto';
import { UpdateMovieGenreDto } from './dto/update-movie_genre.dto';

@Controller('movie-genres')
export class MovieGenresController {
  constructor(private readonly movieGenresService: MovieGenresService) {}

  @Post()
  create(@Body() createMovieGenreDto: CreateMovieGenreDto) {
    return this.movieGenresService.create(createMovieGenreDto);
  }

  @Get()
  findAll() {
    return this.movieGenresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieGenresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieGenreDto: UpdateMovieGenreDto) {
    return this.movieGenresService.update(+id, updateMovieGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieGenresService.remove(+id);
  }
}
