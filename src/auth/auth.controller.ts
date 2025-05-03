import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() dto: any) {
    return 'تسجيل الدخول';
  }

  @Post('register')
  register(@Body() dto: any) {
    return 'تسجيل مستخدم جديد';
  }

  @Post('logout')
  logout() {
    return 'تسجيل الخروج';
  }
}