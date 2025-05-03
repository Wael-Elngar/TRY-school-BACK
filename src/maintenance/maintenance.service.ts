import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maintenance } from './entities/maintenance.entity';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';

@Injectable()
export class MaintenanceService {
  constructor(
    @InjectRepository(Maintenance)
    private readonly maintenanceRepository: Repository<Maintenance>,
  ) {}

  findAll() {
    return this.maintenanceRepository.find();
  }

  findOne(id: string) {
    return this.maintenanceRepository.findOne({ where: { id } });
  }

  create(dto: CreateMaintenanceDto) {
    const maintenance = this.maintenanceRepository.create({
      ...dto,
      device: dto.device ? { id: dto.device } : undefined,
      assignedTo: dto.assignedTo ? { id: dto.assignedTo } : undefined,
    });
    return this.maintenanceRepository.save(maintenance);
  }

  update(id: string, dto: UpdateMaintenanceDto) {
    const updateData: any = {
      ...dto,
      device: dto.device ? { id: dto.device } : undefined,
      assignedTo: dto.assignedTo ? { id: dto.assignedTo } : undefined,
    };
    return this.maintenanceRepository.update(id, updateData);
  }

  remove(id: string) {
    return this.maintenanceRepository.delete(id);
  }
}