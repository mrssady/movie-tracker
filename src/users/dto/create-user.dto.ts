import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    avatarUrl?: string;

    @IsString()
    @IsNotEmpty()
    createdAt: Date;

    @IsString()
    @IsNotEmpty()
    updatedAt: Date;

    @IsString()
    @IsNotEmpty()
    userMovies: UserMovie[];

    @IsString()
    @IsNotEmpty()
    customLists: CustomList[];
}
