import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    LocationModule,
    DatabaseModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
