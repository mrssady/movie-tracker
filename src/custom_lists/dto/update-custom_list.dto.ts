import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomListDto } from './create-custom_list.dto';

export class UpdateCustomListDto extends PartialType(CreateCustomListDto) {}
