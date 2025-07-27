import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { PrismaService } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

<<<<<<< HEAD
  async create(createUserDto: CreateUserDto) {
    let user = await this.prisma.user.findUnique({
      where: {phone: createUserDto.email },
    });
    if (user){
      throw new BadRequestException ('This email is already taken');
    }
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.getUser(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.getUser(id);
    return this.prisma.user.update({where:{id},data:updateUserDto})
  }

  async remove(id: string) {
    await this.getUser(id);
    return this.prisma.user.delete({where :{id}});
  }

  private async getUser(id:string){
    const users = await this.prisma.user.findFrist({
      where:{id},
    });
    if (!users){
      throw new NotFoundException(`No user found with id ${id}`);
  }
  return users;
}
}
=======
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
>>>>>>> 4fd2de4 (prisma problem solved also app.module problem)
