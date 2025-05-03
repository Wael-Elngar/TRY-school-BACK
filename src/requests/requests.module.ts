import { Module } from '@nestjs/common';
import { RequestsController } from './requests.controller';

@Module({
  imports: [],
  controllers: [RequestsController],
  providers: [],
})
export class RequestsModule {}