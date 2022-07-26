import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { RepositoryEntity } from './entities/repository.entity';

@Injectable()
export class RepositoryService {
  constructor(
    @InjectRepository(RepositoryEntity)
    private readonly repoRepository: Repository<RepositoryEntity>,
  ) {}

  async verifyAll(): Promise<RepositoryEntity[]> {
    return await this.repoRepository.find();
  }

  create(createRepositoryDto: CreateRepositoryDto) {
    return 'create';
  }

  async findAll(): Promise<RepositoryEntity[]> {
    return await this.repoRepository.find();
  }

  findOne(id: number) {
    return `find ${id} repository`;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `updates ${id} repository`;
  }

  remove(id: number) {
    return `removes  #${id} repository`;
  }
}
