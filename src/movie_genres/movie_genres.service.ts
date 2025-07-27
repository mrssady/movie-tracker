// movie-genre.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateMovieGenreDto } from './dto/create-movie_genre.dto';
import { UpdateMovieGenreDto } from './dto/update-movie_genre.dto';


@Injectable()
export class MovieGenreService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createMovieGenreDto: CreateMovieGenreDto) {
    return this.prisma.movieGenre.create({ data: createMovieGenreDto });
  }

  async findAll() {
    return this.prisma.movieGenre.findMany();
  }

  async findOne(id: number) {
    const movieGenre = await this.prisma.movieGenre.findUnique({ where: { id } });
    if (!movieGenre) throw new NotFoundException(`MovieGenre with id ${id} not found`);
    return movieGenre;
  }

  async update(id: number, updateMovieGenreDto: UpdateMovieGenreDto) {
    await this.findOne(id);
    return this.prisma.movieGenre.update({ where: { id }, data: updateMovieGenreDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.movieGenre.delete({ where: { id } });
  }
}
