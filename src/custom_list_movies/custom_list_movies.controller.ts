// custom-list-movie.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomListMovieService } from './custom_list_movies.service';
import { CreateCustomListMovieDto } from './dto/create-custom_list_movie.dto';
import { UpdateCustomListMovieDto } from './dto/update-custom_list_movie.dto';

@Controller('custom-list-movies')
export class CustomListMovieController {
  constructor(private readonly customListMovieService: CustomListMovieService) {}

  @Post()
  create(@Body() createCustomListMovieDto: CreateCustomListMovieDto) {
    return this.customListMovieService.create(createCustomListMovieDto);
  }

  @Get()
  findAll() {
    return this.customListMovieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customListMovieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomListMovieDto: UpdateCustomListMovieDto) {
    return this.customListMovieService.update(+id, updateCustomListMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customListMovieService.remove(+id);
  }
}
