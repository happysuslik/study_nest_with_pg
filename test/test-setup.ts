import addJestHbsExtension from 'jest-hbs-extension';
import {resolve} from 'path';

const views = resolve(__dirname, '..', 'views');

addJestHbsExtension(views);
