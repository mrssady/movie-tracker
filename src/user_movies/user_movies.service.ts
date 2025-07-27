import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserMovieDto } from './dto/create-user_movie.dto';
import { UpdateUserMovieDto } from './dto/update-user_movie.dto';


@Injectable()
export class UserMovieService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createUserMovieDto: CreateUserMovieDto) {
    return this.prisma.userMovie.create({ data: createUserMovieDto });
  }

  async findAll(userId: number) {
    return this.prisma.userMovie.findMany({ where: { userId } });
  }

  async findOne(id: number, userId: number) {
    return this.getUserMovie(id, userId);
  }

  async update(id: number, updateUserMovieDto: UpdateUserMovieDto, userId: number) {
    await this.getUserMovie(id, userId);
    return this.prisma.userMovie.update({ where: { id }, data: updateUserMovieDto });
  }

  async remove(id: number, userId: number) {
    await this.getUserMovie(id, userId);
    return this.prisma.userMovie.delete({ where: { id } });
  }

  private async getUserMovie(id: number, userId: number) {
    const userMovie = await this.prisma.userMovie.findFirst({
      where: { id, userId },
    });
    if (!userMovie) {
      throw new NotFoundException(`UserMovie with id ${id} not found`);
    }
    return userMovie;
  }
}
