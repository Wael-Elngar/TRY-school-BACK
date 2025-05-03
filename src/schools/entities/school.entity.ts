import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Floor } from '../../floors/entities/floor.entity';

@Entity()
export class School {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Floor, floor => floor.school)
  floors: Floor[];
}