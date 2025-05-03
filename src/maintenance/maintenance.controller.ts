import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('maintenance')
@Controller('maintenance')
export class MaintenanceController {
  @Get('statistics')
  @ApiOperation({ summary: 'إحصائيات الصيانة' })
  getStatistics() {
    return {
      total: 0,
      pending: 0,
      inProgress: 0,
      completed: 0,
      cancelled: 0
    };
  }
}