import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Room } from '../../rooms/entities/room.entity';
import { Maintenance } from '../../maintenance/entities/maintenance.entity';

@Entity()
export class Device {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Room, room => room.devices)
  room: Room;

  @OneToMany(() => Maintenance, maintenance => maintenance.device)
  maintenanceRecords: Maintenance[];
}