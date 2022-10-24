import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';
  
  @Entity({ name: 'test2' })
  @Unique(['id'])
  export class test2 extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 50, comment: '유저 아이디' })
    title2: string;
  
    @Column({ type: 'varchar', length: 255, comment: '유저 비밀번호' })
    description2: string;
  }