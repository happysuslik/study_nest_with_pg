import addJestHbsExtension from 'jest-hbs-extension';
import {CONFIG} from '../src/config/config';

const views = CONFIG.templates.path;

addJestHbsExtension(views);
