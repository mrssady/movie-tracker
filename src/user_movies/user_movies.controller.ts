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
import { CreateUserMovieDto } from './dto/create-user_movie.dto';
import { UpdateUserMovieDto } from './dto/update-user_movie.dto';
import { RequestWithUser } from '../common/interfaces/request-with-user';


@Controller('user-movies')
export class UserMovieController {
  constructor(private readonly userMovieService: UserMovieService) {}

  @Post()
  create(@Body() createUserMovieDto: CreateUserMovieDto, @Req() req: RequestWithUser) {
    createUserMovieDto.userId = req.user.id;
    return this.userMovieService.create(createUserMovieDto);
  }

  @Get()
  findAll(@Req() req: RequestWithUser) {
    return this.userMovieService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.userMovieService.findOne(+id, req.user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserMovieDto: UpdateUserMovieDto,
    @Req() req: RequestWithUser,
  ) {
    return this.userMovieService.update(+id, updateUserMovieDto, req.user.id);  
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.userMovieService.remove(+id, req.user.id);
  }
}
