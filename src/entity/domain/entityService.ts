import { entityContext } from '@/entity/infrastructure/context'
import type { EntityRepo } from '@/entity/domain/entityRepo'
import type { Entity } from '@/entity/domain/entity'

export class EntityService {
  private entityRepo: EntityRepo

  constructor() {
    this.entityRepo = entityContext.get<EntityRepo>('EntityRepository')
  }

  async get(id: number): Promise<Entity> {
    // Service logic
    return await this.entityRepo.getEntity(id)
  }

  async getList(): Promise<Entity[]> {
    // Service logic
    return await this.entityRepo.getEntities()
  }

  async create(entity: Entity): Promise<Entity> {
    // Service logic
    return await this.entityRepo.createEntity(entity)
  }

  async update(entity: Entity): Promise<Entity> {
    // Service logic
    return await this.entityRepo.updateEntity(entity)
  }

  async delete(id: number): Promise<void> {
    // Service logic
    return await this.entityRepo.deleteEntity(id)
  }
}
