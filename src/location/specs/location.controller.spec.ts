import {LocationController} from '../location.controller';
import {LocationService} from '../services/location.service';
import {MappingRegistryService} from '../../common/mapping-registry.service';
import {MockHelper} from '../../common/mock.helper';
import {GenericFactory} from '../../common/generic.factory';
import {Location} from '../entities/location.entity';
import {LocationMappingService} from '../services/location-mapping.service';

describe('Location Controller', () => {
    let locationController: LocationController;
    let mockLocationService: LocationService;
    let mappingRegistryService: MappingRegistryService;

    beforeEach(async () => {
        mockLocationService = MockHelper.mock<LocationService>({
            list: {
                resolves: [
                    GenericFactory.create<Location>(Location, {
                        id: 'e0537985-9f9b-44cb-afe8-687f4be39147',
                        name: 'Location 1',
                    }),
                    GenericFactory.create<Location>(Location, {
                        id: 'abd4d5a1-fef3-436a-b501-c46363b4cba7',
                        name: 'Location 2',
                    }),
                ],
            },
        });

        mappingRegistryService = new MappingRegistryService();
        const locationMappingService = new LocationMappingService(mappingRegistryService);

        locationController = new LocationController(mockLocationService, mappingRegistryService);
    });

    describe('root', () => {
        it('should return locations', () => {
            expect(locationController.listLocations()).resolves.toMatchObject({
                locations: [
                    {
                        id: 'e0537985-9f9b-44cb-afe8-687f4be39147',
                        name: 'Location 1',
                    },
                    {
                        id: 'abd4d5a1-fef3-436a-b501-c46363b4cba7',
                        name: 'Location 2',
                    },
                ],
            });
        });
    });
});
