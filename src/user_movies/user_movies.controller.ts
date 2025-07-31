import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { UserMovieService } from './user_movies.service';
import { CreateUserMovieDto } from '../dto/create-user-movie.dto';
import { UpdateUserMovieDto } from '../dto/update-user-movie.dto';
import { Request } from 'express';
import { User } from '@prisma/client';

interface UserMovieRequest extends Request {
  payload: User;
}

@Controller('user-movies')
export class UserMovieController {
  constructor(private readonly userMovieService: UserMovieService) {}

  @Post()
  create(@Body() createUserMovieDto: CreateUserMovieDto, @Req() req: UserMovieRequest) {
    createUserMovieDto.userId = req.payload.id;
    return this.userMovieService.create(createUserMovieDto);
  }

  @Get()
  findAll(@Req() req: UserMovieRequest) {
    return this.userMovieService.findAll(req.payload.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: UserMovieRequest) {
    return this.userMovieService.findOne(+id, req.payload.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserMovieDto: UpdateUserMovieDto,
    @Req() req: UserMovieRequest,
  ) {
    return this.userMovieService.update(+id, updateUserMovieDto, req.payload.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: UserMovieRequest) {
    return this.userMovieService.remove(+id, req.payload.id);
  }
}
