// custom-list.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCustomListDto } from './dto/create-custom-list.dto';
import { UpdateCustomListDto } from './dto/update-custom-list.dto.ts';

@Injectable()
export class CustomListService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createCustomListDto: CreateCustomListDto) {
    return this.prisma.customList.create({ data: createCustomListDto });
  }

  async findAll(userId: number) {
    return this.prisma.customList.findMany({ where: { userId } });
  }

  async findOne(id: number, userId: number) {
    const list = await this.prisma.customList.findFirst({ where: { id, userId } });
    if (!list) throw new NotFoundException(`CustomList with id ${id} not found`);
    return list;
  }

  async update(id: number, updateCustomListDto: UpdateCustomListDto, userId: number) {
    await this.findOne(id, userId);
    return this.prisma.customList.update({ where: { id }, data: updateCustomListDto });
  }

  async remove(id: number, userId: number) {
    await this.findOne(id, userId);
    return this.prisma.customList.delete({ where: { id } });
  }
}
