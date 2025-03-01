import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Comment } from './entities/comment.entity';
import { UsersModule } from '../users/users.module';
import { PostsModule } from '../posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]), // Register Comment entity
    UsersModule, // Import UsersModule to access User entity
    PostsModule, // Import PostsModule to access Post entity
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
