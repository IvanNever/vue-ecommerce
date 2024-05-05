import type { Entity } from '@/entity/domain/entity'
import type { EntityDto } from '@/entity/api/entityDto'
import type { EntityRepo } from '@/entity/domain/entityRepo'
import { BaseRepo } from '@/infrastructure/api/BaseRepo'
import { entityFromDto } from '@/entity/api/entityDtoMapper'

const baseUrl: string = 'https://jsonplaceholder.typicode.com'

export class EntityRepoImpl extends BaseRepo implements EntityRepo {
  constructor() {
    super()
  }
  async getEntities(): Promise<Entity[]> {
    const res = await this.inst.get<EntityDto[]>(`${baseUrl}/posts`)
    return res.data.map((item) => entityFromDto(item))
  }
  async getEntity(id: number): Promise<Entity> {
    const res = await this.inst.get<EntityDto>(`${baseUrl}/post/${id}`)
    return entityFromDto(res.data)
  }
  async createEntity(entity: Entity): Promise<Entity> {
    const res = await this.inst.post<EntityDto>(`${baseUrl}/post`, { entity })
    return entityFromDto(res.data)
  }
  async updateEntity(entity: Entity): Promise<Entity> {
    const res = await this.inst.put<EntityDto>(`${baseUrl}/post`, { entity })
    return entityFromDto(res.data)
  }
  async deleteEntity(id: number): Promise<void> {
    return await this.inst.delete(`${baseUrl}/post/${id}`)
  }
}
