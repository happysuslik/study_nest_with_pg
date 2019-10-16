import addJestHbsExtension from 'jest-hbs-extension';
import { ConfigService } from '../src/config/config.service';

const configService = new ConfigService();
const views = configService.get<string>('templates.path');

addJestHbsExtension(views);
