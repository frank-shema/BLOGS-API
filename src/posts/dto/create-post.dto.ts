import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  @IsNotEmpty()
  authorId: number; // ID of the user creating the post

  @IsInt({ each: true })
  categoryIds: number[]; // Array of category IDs
}
