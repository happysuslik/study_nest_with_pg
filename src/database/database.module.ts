import { Module } from '@nestjs/common';
import { PostgresTypeOrmConfigService } from './postgres-typeorm-config.service';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    TypeOrmCoreModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresTypeOrmConfigService,
    }),
  ],
})
export class DatabaseModule {}
