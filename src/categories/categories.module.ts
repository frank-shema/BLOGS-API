import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])], // Register Category entity
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService], // Export CategoriesService for use in other modules
})
export class CategoriesModule {}
