import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomListsService } from './custom_lists.service';
import { CreateCustomListDto } from './dto/create-custom_list.dto';
import { UpdateCustomListDto } from './dto/update-custom_list.dto';

@Controller('custom-lists')
export class CustomListsController {
  constructor(private readonly customListsService: CustomListsService) {}

  @Post()
  create(@Body() createCustomListDto: CreateCustomListDto) {
    return this.customListsService.create(createCustomListDto);
  }

  @Get()
  findAll() {
    return this.customListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customListsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomListDto: UpdateCustomListDto) {
    return this.customListsService.update(+id, updateCustomListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customListsService.remove(+id);
  }
}
