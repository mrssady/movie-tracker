import { Injectable } from '@nestjs/common';
import { CreateCustomListDto } from './dto/create-custom_list.dto';
import { UpdateCustomListDto } from './dto/update-custom_list.dto';

@Injectable()
export class CustomListsService {
  create(createCustomListDto: CreateCustomListDto) {
    return 'This action adds a new customList';
  }

  findAll() {
    return `This action returns all customLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customList`;
  }

  update(id: number, updateCustomListDto: UpdateCustomListDto) {
    return `This action updates a #${id} customList`;
  }

  remove(id: number) {
    return `This action removes a #${id} customList`;
  }
}
