import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { CrazyController } from './crazy.controller'; // Adjust path if necessary
import { MagicController } from './magic.controller'; // Adjust path if necessary
import { DrawingController } from './draw/drawing.controller';
import { DrawingService } from './draw/drawing.service';
import { ShapeService } from './shape/shape.service';
import { ShapeController } from './shape/shape.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load environment variables
    DatabaseModule, // Import DatabaseModule
    UsersModule,
    AuthModule,
    PostsModule,
    CategoriesModule,
    CommentsModule,
  ],
  controllers: [CrazyController, MagicController, DrawingController, ShapeController],
  providers: [DrawingService, ShapeService],
})
export class AppModule {}
