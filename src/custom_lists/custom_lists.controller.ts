// custom-list.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { CustomListService } from './custom-list.service';
import { CreateCustomListDto } from './dto/create-custom-list.dto';
import { UpdateCustomListDto } from './dto/update-custom-list.dto.ts';
import { Request } from 'express';
import { User } from '@prisma/client';

interface CustomListRequest extends Request {
  payload: User;
}

@Controller('custom-lists')
export class CustomListController {
  constructor(private readonly customListService: CustomListService) {}

  @Post()
  create(@Body() createCustomListDto: CreateCustomListDto, @Req() req: CustomListRequest) {
    createCustomListDto.userId = req.payload.id;
    return this.customListService.create(createCustomListDto);
  }

  @Get()
  findAll(@Req() req: CustomListRequest) {
    return this.customListService.findAll(req.payload.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: CustomListRequest) {
    return this.customListService.findOne(+id, req.payload.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomListDto: UpdateCustomListDto,
    @Req() req: CustomListRequest,
  ) {
    return this.customListService.update(+id, updateCustomListDto, req.payload.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: CustomListRequest) {
    return this.customListService.remove(+id, req.payload.id);
  }
}
