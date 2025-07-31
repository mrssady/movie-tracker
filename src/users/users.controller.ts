// user.controller.ts
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
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; 
import { RequestWithUser } from '../common/interfaces/request-with-user';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
@Get()
findAll(@Req() request: RequestWithUser) {
  return this.userService.findAll(request.user.id);
}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('me')
  findMe(@Req() req: RequestWithUser) {
    return this.userService.findOne(req.user.id);
  }

  @Patch('me')
  update(@Body() updateUserDto: UpdateUserDto, @Req() req: RequestWithUser) {
    return this.userService.update(req.user.id, updateUserDto);
  }

  @Delete('me')
  remove(@Req() req: RequestWithUser) {
    return this.userService.remove(req.user.id);
  }
}
