import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { School } from '../../schools/entities/school.entity';
import { Room } from '../../rooms/entities/room.entity';

@Entity()
export class Floor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => School, school => school.floors)
  school: School;

  @OneToMany(() => Room, room => room.floor)
  rooms: Room[];
}