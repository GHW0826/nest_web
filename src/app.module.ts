import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [
    // TypeOrm 설정 파일 연결
    TypeOrmModule.forRoot(typeORMConfig) 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
