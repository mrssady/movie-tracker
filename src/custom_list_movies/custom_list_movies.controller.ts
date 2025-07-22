import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomListMoviesService } from './custom_list_movies.service';
import { CreateCustomListMovieDto } from './dto/create-custom_list_movie.dto';
import { UpdateCustomListMovieDto } from './dto/update-custom_list_movie.dto';

@Controller('custom-list-movies')
export class CustomListMoviesController {
  constructor(private readonly customListMoviesService: CustomListMoviesService) {}

  @Post()
  create(@Body() createCustomListMovieDto: CreateCustomListMovieDto) {
    return this.customListMoviesService.create(createCustomListMovieDto);
  }

  @Get()
  findAll() {
    return this.customListMoviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customListMoviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomListMovieDto: UpdateCustomListMovieDto) {
    return this.customListMoviesService.update(+id, updateCustomListMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customListMoviesService.remove(+id);
  }
}
