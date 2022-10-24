import { EntityRepository, Repository } from 'typeorm';
import { test2 } from 'src/entity/test2.entity'; 

@EntityRepository(test2)
export class test2Repository extends Repository<test2> {}