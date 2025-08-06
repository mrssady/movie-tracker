import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { UserMovie } from '@prisma/client';
import { CreateUserMovieDto } from './dto/create-user_movie.dto';
import { UpdateUserMovieDto } from './dto/update-user_movie.dto';
import { PrismaService } from '../prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class UserMovieService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly tmdbApiKey = process.env.TMDB_API_KEY;

  async create(createUserMovieDto: CreateUserMovieDto): Promise<UserMovie> {
    // Fetch TMDb movie details
    const tmdbDetails = await this.fetchTmdbMovieDetails(createUserMovieDto.movieId);

    if (!tmdbDetails) {
      throw new InternalServerErrorException('Failed to fetch movie details from TMDb');
    }

    // Create user movie with enriched data
    return this.prisma.userMovie.create({
  data: {
    ...createUserMovieDto,
    title: (tmdbDetails as any).title,
    posterUrl: (tmdbDetails as any).poster_path,
  },
});

  }

  async findAll(userId: number): Promise<UserMovie[]> {
    return this.prisma.userMovie.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number, userId: number): Promise<UserMovie> {
    return this.getUserMovie(id, userId);
  }

  async update(
    id: number,
    updateUserMovieDto: UpdateUserMovieDto,
    userId: number,
  ): Promise<UserMovie> {
    await this.getUserMovie(id, userId);
    return this.prisma.userMovie.update({
      where: { id },
      data: updateUserMovieDto,
    });
  }

  async remove(id: number, userId: number): Promise<UserMovie> {
    await this.getUserMovie(id, userId);
    return this.prisma.userMovie.delete({
      where: { id },
    });
  }

  private async getUserMovie(id: number, userId: number): Promise<UserMovie> {
    const userMovie = await this.prisma.userMovie.findFirst({
      where: { id, userId },
    });

    if (!userMovie) {
      throw new NotFoundException(
        `UserMovie with id ${id} not found for the current user.`,
      );
    }

    return userMovie;
  }

  private async fetchTmdbMovieDetails(movieId: number) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.tmdbApiKey}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching TMDb movie details for ID ${movieId}:`, error);
      return null;
    }
  }
}
