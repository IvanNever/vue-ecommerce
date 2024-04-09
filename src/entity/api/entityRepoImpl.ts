import type { Entity } from '@/entity/domain/entity'
import type { EntityDto } from '@/entity/api/entityDto'
import type { EntityRepo } from '@/entity/domain/entityRepo'
import { BaseRepo } from '@/infrastructure/api/BaseRepo'

const baseUrl: string = 'https://jsonplaceholder.typicode.com'

export class EntityRepoImpl extends BaseRepo implements EntityRepo {
  constructor() {
    super()
  }
  async getEntities(): Promise<Entity[]> {
    const res = await this.inst.get<EntityDto>(`${baseUrl}/posts`)
    return res.data
  }
  async getEntity(id: number): Promise<Entity> {
    return {} as Entity
  }
  async createEntity(entity: Entity): Promise<Entity> {
    return {} as Entity
  }
  async updateEntity(entity: Entity): Promise<Entity> {
    return {} as Entity
  }
  async deleteEntity(id: number): Promise<void> {
    return
  }
}
