import type { Entity } from '../domain/entity'
import type { EntityDto } from './entityDto'

export const entityFromDto = (entity: EntityDto): Entity => {
  // Mapping logic
  return entity as Entity
}

export const entityToDto = (entity: Entity): EntityDto => {
  // Mapping logic
  return entity as EntityDto
}
