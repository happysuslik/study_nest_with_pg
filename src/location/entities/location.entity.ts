import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'location' })
export class Location {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;
}
