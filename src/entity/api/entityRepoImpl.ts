import type { Entity } from '@/entity/domain/entity'
import type { EntityDto } from '@/entity/api/entityDto'
import type { EntityRepo } from '@/entity/domain/entityRepo'

const baseUrl: string = 'entities'

export class EntityRepoImpl implements EntityRepo {
  async getEntities(): Promise<Entity[]> {
    return []
  }
  async getEntity(id: number): Promise<Entity> {
    return {}
  }
  async createEntity(entity: Entity): Promise<Entity> {
    return {}
  }
  async updateEntity(entity: Entity): Promise<Entity> {
    return {}
  }
  async deleteEntity(id: number): Promise<void> {
    return
  }
}
