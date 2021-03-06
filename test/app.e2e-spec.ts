import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../src/app.module';

import * as request from 'supertest';

describe('LocationController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .then(({ text }) => {
        expect(text).toMatchCompiledHandlebarsTemplate('list.hbs', {
          locations: [
            { name: 'test 1' },
            { name: 'test 2' },
          ],
        });
      });
  });
});

