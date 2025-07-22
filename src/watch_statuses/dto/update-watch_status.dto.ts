import { PartialType } from '@nestjs/mapped-types';
import { CreateWatchStatusDto } from './create-watch_status.dto';

export class UpdateWatchStatusDto extends PartialType(CreateWatchStatusDto) {}
