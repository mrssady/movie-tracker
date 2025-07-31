// watch-status.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateWatchStatusDto } from './dto/create-watch_status.dto';
import { UpdateWatchStatusDto } from './dto/update-watch_status.dto';

@Injectable()
export class WatchStatusService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createWatchStatusDto: CreateWatchStatusDto) {
    return this.prisma.watchStatus.create({ data: createWatchStatusDto });
  }

  async findAll() {
    return this.prisma.watchStatus.findMany();
  }

  async findOne(id: number) {
    const status = await this.prisma.watchStatus.findUnique({ where: { id } });
    if (!status) throw new NotFoundException(`WatchStatus with id ${id} not found`);
    return status;
  }

  async update(id: number, updateWatchStatusDto: UpdateWatchStatusDto) {
    await this.findOne(id);
    return this.prisma.watchStatus.update({ where: { id }, data: updateWatchStatusDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.watchStatus.delete({ where: { id } });
  }
}
