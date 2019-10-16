import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname, '..', 'src');

export default {
  database: {
    url: 'postgres://app:app@localhost:54320/locations',
  },
  orm: {
    entities: [`${SOURCE_PATH}/**/*.entity.ts`],
    synchronize: false,
  },
  templates: {
    path: resolve(__dirname, '..', 'views'),
  },
  public: {
    path: resolve(__dirname, '..', 'public'),
  },
};
