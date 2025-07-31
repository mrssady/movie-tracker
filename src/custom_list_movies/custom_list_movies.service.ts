// custom-list-movie.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCustomListMovieDto } from './dto/create-custom-list-movie.dto';
import { UpdateCustomListMovieDto } from './dto/update-custom-list-movie.dto';

@Injectable()
export class CustomListMovieService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createCustomListMovieDto: CreateCustomListMovieDto) {
    return this.prisma.customListMovie.create({ data: createCustomListMovieDto });
  }

  async findAll() {
    return this.prisma.customListMovie.findMany();
  }

  async findOne(id: number) {
    const customListMovie = await this.prisma.customListMovie.findUnique({ where: { id } });
    if (!customListMovie) {
      throw new NotFoundException(`CustomListMovie with id ${id} not found`);
    }
    return customListMovie;
  }

  async update(id: number, updateCustomListMovieDto: UpdateCustomListMovieDto) {
    await this.findOne(id);
    return this.prisma.customListMovie.update({
      where: { id },
      data: updateCustomListMovieDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.customListMovie.delete({ where: { id } });
  }
}
