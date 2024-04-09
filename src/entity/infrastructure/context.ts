import type { Context } from '@/infrastructure/context'
import { createContext } from '@/infrastructure/context'
import { EntityRepoImpl } from '@/entity/api/entityRepoImpl'
import { EntityService } from '@/entity/domain/entityService'

export let entityContext: Context

export function initEntityContext() {
  entityContext = createContext('Entity')

  entityContext.registry(EntityRepoImpl, 'EntityRepository')
  entityContext.registry(EntityService, 'EntityService')
}
