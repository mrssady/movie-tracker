// genre.module.ts
import { Module } from '@nestjs/common';
import { GenreController } from './genres.controller';
import { GenreService } from './genres.service.js';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [GenreController],
  providers: [GenreService, PrismaClient],
  exports: [GenreService],
})
export class GenreModule {}
