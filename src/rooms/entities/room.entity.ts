import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Floor } from '../../floors/entities/floor.entity';
import { Device } from '../../devices/entities/device.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Floor, floor => floor.rooms)
  floor: Floor;

  @OneToMany(() => Device, device => device.room)
  devices: Device[];
}