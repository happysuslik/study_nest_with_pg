import {ConnectionOptions} from 'typeorm';
import {resolve} from 'path';

const { NODE_ENV } = process.env;

const SOURCE_PATH = resolve(__dirname, '..');
console.log(`${SOURCE_PATH}/**/*.entity{.ts,.js}`);

export const DB_ORM_CONFIG = {
    type: 'postgres',
    host: 'localhost',
    port: 54320,
    username: 'app',
    password: 'app',
    database: 'locations',
    entities: [`${SOURCE_PATH}/**/*.entity{.ts,.js}`],
    synchronize: true,
} as ConnectionOptions;
