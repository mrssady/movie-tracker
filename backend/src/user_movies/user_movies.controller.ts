import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { UserMovieService } from './user_movies.service';
import { CreateUserMovieDto } from './dto/create-user_movie.dto';
import { UpdateUserMovieDto } from './dto/update-user_movie.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.interface';

@Controller('user-movies')
@UseGuards(JwtAuthGuard)
export class UserMovieController {
  constructor(private readonly userMovieService: UserMovieService) {}

  @Post()
create(@Body() dto: CreateUserMovieDto, @GetUser() user: any) {
  console.log('user from token:', user);
  return this.userMovieService.create({ ...dto, userId: user.id });
}

  @Get()
  findAll(@GetUser() user: User) {
    return this.userMovieService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.userMovieService.findOne(id, user.id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserMovieDto: UpdateUserMovieDto,
    @GetUser() user: User,
  ) {
    return this.userMovieService.update(id, updateUserMovieDto, user.id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.userMovieService.remove(id, user.id);
  }
}
