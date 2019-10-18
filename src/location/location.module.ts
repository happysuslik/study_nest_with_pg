import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './services/location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { LocationMappingService } from './services/location-mapping.service';
import { Location } from './entities/location.entity';

@Module({
  controllers: [
    LocationController,
  ],
  imports: [
    TypeOrmModule.forFeature([Location]),
    CommonModule,
  ],
  providers: [
    LocationService,
    LocationMappingService,
  ],
})
export class LocationModule {}
