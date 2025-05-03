import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Post(':id/roles')
  @ApiOperation({ summary: 'تعيين دور للمستخدم' })
  assignRole(@Param('id') id: string, @Body() roleData: any) {
    return `تم تعيين دور جديد للمستخدم ${id}`;
  }

  @Get(':id/permissions')
  @ApiOperation({ summary: 'عرض صلاحيات المستخدم' })
  getUserPermissions(@Param('id') id: string) {
    return `صلاحيات المستخدم ${id}`;
  }
}