import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async findAll(page: number, limit: number, search?: string) {
    const query = this.postRepository
      .createQueryBuilder('post')
      .skip((page - 1) * limit)
      .take(limit);

    if (search) {
      query.where('post.title LIKE :search', { search: `%${search}%` });
    }

    return query.getMany();
  }
}
