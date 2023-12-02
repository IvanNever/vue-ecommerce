import type { Entity } from '../domain/entity'
import type { EntityDto } from './entityDto'

export const entityMapperFromDto = (entity: Entity): EntityDto => {
  // Mapping logic
  return entity as EntityDto
}

export const entityMapperToDto = (entityDto: EntityDto): Entity => {
  // Mapping logic
  return entityDto as Entity
}
