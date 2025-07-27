// movie.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';


@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createMovieDto: CreateMovieDto) {
    return this.prisma.movie.create({ data: createMovieDto });
  }

  async findAll() {
    return this.prisma.movie.findMany();
  }

  async findOne(id: number) {
    const movie = await this.prisma.movie.findUnique({ where: { id } });
    if (!movie) throw new NotFoundException(`Movie with id ${id} not found`);
    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    await this.findOne(id);
    return this.prisma.movie.update({ where: { id }, data: updateMovieDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.movie.delete({ where: { id } });
  }
}
