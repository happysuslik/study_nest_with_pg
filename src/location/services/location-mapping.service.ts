import { Injectable } from '@nestjs/common';
import { MappingService } from '../../common/mapping.service';
import { LocationDto } from '../dtos/location.dto';
import { Location } from '../entities/location.entity';

@Injectable()
export class LocationMappingService extends MappingService {
  public addMapping(): void {
    automapper.createMap(Location.name, LocationDto.name);
  }
}
