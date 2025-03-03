import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule to use ConfigService
      inject: [ConfigService], // Inject ConfigService
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', // Database type
        host: configService.get<string>('DB_HOST'), // Database host
        port: configService.get<number>('DB_PORT'), // Database port
        username: configService.get<string>('DB_USERNAME'), // Database username
        password: configService.get<string>('DB_PASSWORD'), // Database password
        database: configService.get<string>('DB_NAME'), // Database name
        entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Auto-load entities
        synchronize: true, // Automatically sync database schema (disable in production)
        logging: true, // Enable SQL query logging (optional)
      }),
    }),
  ],
})
export class DatabaseModule {}
