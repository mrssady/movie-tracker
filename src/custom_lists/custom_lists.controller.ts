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
import { CustomListService } from './custom_lists.service';
import { CreateCustomListDto } from './dto/create-custom_list.dto';
import { UpdateCustomListDto } from './dto/update-custom_list.dto';
import { RequestWithUser } from '../common/interfaces/request-with-user';


@Controller('custom-lists')
export class CustomListController {
  constructor(private readonly customListService: CustomListService) {}

  @Post()
  create(@Body() createCustomListDto: CreateCustomListDto, @Req() req: RequestWithUser) {
    createCustomListDto.userId = req.user.id;
    return this.customListService.create(createCustomListDto);
  }

  @Get()
  findAll(@Req() req: RequestWithUser) {
    return this.customListService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.customListService.findOne(+id, req.user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomListDto: UpdateCustomListDto,
    @Req() req: RequestWithUser,
  ) {
    return this.customListService.update(+id, updateCustomListDto, req.user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.customListService.remove(+id, req.user.id); 
  }
}
