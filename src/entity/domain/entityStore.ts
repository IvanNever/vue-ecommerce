import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Entity } from './entity'

export const useEntityStore = defineStore('entity', () => {
  const entity = ref<Entity | null>(null)

  const getComputedEntity = computed<Entity>(() => {
    const modifiedEntity: Entity = { ...entity.value }
    // Some logic
    return modifiedEntity
  })

  function setEntity(data: Entity): void {
    entity.value = data
  }

  return { entity, getComputedEntity, setEntity }
})
