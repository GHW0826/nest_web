import {
    Controller,
  } from '@nestjs/common';
  import { test2Service } from 'src/service/test2.service';
  
  @Controller('test2')
  export class test2Controller {
    constructor(private readonly test2Service: test2Service) {}
  }