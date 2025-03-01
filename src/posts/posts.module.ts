import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './entities/post.entity';
import { UsersModule } from '../users/users.module';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]), // Register Post entity
    UsersModule, // Import UsersModule to access User entity
    CategoriesModule, // Import CategoriesModule to access Category entity
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
