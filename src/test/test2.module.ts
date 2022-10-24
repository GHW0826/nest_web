import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { test2Repository } from 'src/repository/test.repository';
import { test2Service } from 'src/service/test2.service';
import { test2Controller } from 'src/controller/test2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([test2Repository])], //UserRepository 등록
  controllers: [test2Controller],
  providers: [test2Service],
})
export class UserModule {}