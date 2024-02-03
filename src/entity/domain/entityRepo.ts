import type { Entity } from '@/entity/domain/entity'

export interface EntityRepo {
  getEntities(): Promise<Entity[]>
  getEntity(id: number): Promise<Entity>
  createEntity(entity: Entity): Promise<Entity>
  updateEntity(entity: Entity): Promise<Entity>
  deleteEntity(id: number): Promise<void>
}
