import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity({ name: 'repository' })
export class RepositoryEntity {
  @PrimaryGeneratedColumn()
  id_repository: number;

  @Column()
  id_tribe: number;

  @Column({ length: 50 })
  name: string;

  @Column({ type: 'enum', enum: 'RepositoryState' })
  state: number;

  @Column({ type: 'timestamp', default: () => 'now()' })
  create_time: Timestamp;

  @Column({ length: 1 })
  status: string;
}

export enum RepositoryState {
  VERIFICADO = 604,
  EN_ESPERA = 605,
  APROBADO = 606,
}
