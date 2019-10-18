import {LocationService} from '../services/location.service';
import {Repository} from 'typeorm';
import {Location} from '../entities/location.entity';
import {GenericFactory} from '../../common/generic.factory';
import {MockHelper} from '../../common/mock.helper';

describe('LocationService', () => {
    let service: LocationService;
    let mockRepository: Repository<Location>;

    beforeEach(async () => {
        mockRepository = MockHelper.mock<Repository<Location>>({
            find: {
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

        service = new LocationService(mockRepository);
    });

    it('should be return locations', () => {
        expect(service.list()).resolves.toMatchObject([
            {
                id: 'e0537985-9f9b-44cb-afe8-687f4be39147',
                name: 'Location 1',
            },
            {
                id: 'abd4d5a1-fef3-436a-b501-c46363b4cba7',
                name: 'Location 2',
            },
        ]);
    });
});
