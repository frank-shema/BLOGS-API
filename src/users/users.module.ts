import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity
  providers: [UsersService],
  exports: [UsersService], // Export UsersService for use in other modules
})
export class UsersModule {}
