import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from './services/location.service';
import { LocationListDto } from './dtos/location-list.dto';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { LocationDto } from './dtos/location.dto';

@Controller()
export class LocationController {

  constructor(
    private readonly locationService: LocationService,
    private readonly mappingRegistryService: MappingRegistryService,
    ) { }

  @Get()
  @Render('list.hbs')
  public async listLocations(): Promise<LocationListDto> {
    const locations = await this.locationService.list();
    console.log('locations => ', locations);
    // const dtos = locations.map(location =>
    //   this.mappingRegistryService.map<LocationDto>(location.name, LocationDto.name, location));

    return { locations: [...locations] };
  }

}
