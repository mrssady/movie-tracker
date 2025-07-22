import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserMoviesService } from './user_movies.service';
import { CreateUserMovieDto } from './dto/create-user_movie.dto';
import { UpdateUserMovieDto } from './dto/update-user_movie.dto';

@Controller('user-movies')
export class UserMoviesController {
  constructor(private readonly userMoviesService: UserMoviesService) {}

  @Post()
  create(@Body() createUserMovieDto: CreateUserMovieDto) {
    return this.userMoviesService.create(createUserMovieDto);
  }

  @Get()
  findAll() {
    return this.userMoviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userMoviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserMovieDto: UpdateUserMovieDto) {
    return this.userMoviesService.update(+id, updateUserMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userMoviesService.remove(+id);
  }
}
