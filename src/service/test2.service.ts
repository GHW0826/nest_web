import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { test2Repository } from 'src/repository/test.repository';
import { test2 } from 'src/entity/test2.entity';

@Injectable()
export class test2Service {
  //생성자 부분에 가져와 사용한다.
  constructor(
    @InjectRepository(test2Repository) private userRepository: test2Repository,
  ) {}
}