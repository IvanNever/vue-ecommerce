import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Entity } from './entity'

export const useEntityStore = defineStore('entity', () => {
  const entity = ref<Entity>(null)

  const getComputedEntity = computed<Entity>(() => {
    const modifiedEntity = { ...entity.value }
    // Some logic
    return modifiedEntity
  })

  function setEntity(data: Entity) {
    entity.value = data
  }

  return { entity, getComputedEntity, setEntity }
})
