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
import { Request } from 'express';
import { User } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; 


interface UserRequest extends Request {
  payload: User;
}

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
@Get()
findAll(@Req() request: UserRequest) {
  return this.userService.findAll(request.payload.id);
}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('me')
  findMe(@Req() req: UserRequest) {
    return this.userService.findOne(req.payload.id);
  }

  @Patch('me')
  update(@Body() updateUserDto: UpdateUserDto, @Req() req: UserRequest) {
    return this.userService.update(req.payload.id, updateUserDto);
  }

  @Delete('me')
  remove(@Req() req: UserRequest) {
    return this.userService.remove(req.payload.id);
  }
}
