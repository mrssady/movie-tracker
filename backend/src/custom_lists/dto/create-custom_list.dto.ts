import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateCustomListDto {
  @IsInt()
  userId: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
