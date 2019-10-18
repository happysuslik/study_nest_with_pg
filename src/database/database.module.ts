import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DB_ORM_CONFIG} from '../config/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(DB_ORM_CONFIG),
  ],
})
export class DatabaseModule {}
