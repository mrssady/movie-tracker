import { IsString } from 'class-validator';

export class CreateWatchStatusDto {
  @IsString()
  name: string;
}
