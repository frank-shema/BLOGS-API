import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post = this.postRepository.create(createPostDto);
    return this.postRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    await this.postRepository.update(id, updatePostDto);
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    return post;
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
