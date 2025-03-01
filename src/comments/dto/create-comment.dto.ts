import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  @IsNotEmpty()
  authorId: number; // ID of the user creating the comment

  @IsInt()
  @IsNotEmpty()
  postId: number; // ID of the post the comment belongs to
}
