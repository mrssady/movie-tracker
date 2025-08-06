import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;

    return this.prisma.user.create({ data: createUserDto });
  }

  async findOne(identifier: { id?: number; email?: string }) {
  if (!identifier.id && !identifier.email) {
    throw new NotFoundException(`User identifier is required`);
  }

  const user = await this.prisma.user.findUnique({
    where: identifier.id
      ? { id: identifier.id }
      : { email: identifier.email },
  });

  if (!user) throw new NotFoundException(`User not found`);
  return user;
}

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne({ id }); // ✅ Pass as object now
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  async remove(id: number) {
    await this.findOne({ id }); // ✅ Pass as object now
    return this.prisma.user.delete({ where: { id } });
  }

  async findAll(userId: number) {
    return this.prisma.user.findMany({
      where: {
        id: userId,
      },
    });
  }
}
