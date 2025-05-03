import { IsString, IsEnum, IsOptional, IsUUID } from 'class-validator';

export class CreateMaintenanceDto {
  @IsString()
  description: string;

  @IsEnum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'])
  status: string;

  @IsOptional()
  completedAt?: Date;

  @IsUUID()
  device: string;

  @IsUUID()
  assignedTo: string;
}