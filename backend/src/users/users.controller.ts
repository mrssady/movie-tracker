// users.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

 
  @UseGuards(JwtAuthGuard)
  @Get('me')
  findMe(@Req() req: RequestWithUser) {
    console.log('req.user:', req.user); // helpful debug
    return this.userService.findOne({ id: req.user.id });

  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  update(@Body() updateUserDto: UpdateUserDto, @Req() req: RequestWithUser) {
    return this.userService.update(req.user.id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('me')
  remove(@Req() req: RequestWithUser) {
    return this.userService.remove(req.user.id);
  }
}
