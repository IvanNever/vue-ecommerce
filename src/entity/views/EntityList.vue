<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { entityContext } from '@/entity/infrastructure/context'
import type { EntityService } from '@/entity/domain/entityService'
import type { Entity } from '@/entity/domain/entity'

const entityService = entityContext.get<EntityService>('EntityService')

const entites = ref<Entity[]>([])
async function getEntities(): Promise<any> {
  try {
    const res = await entityService.getList()
    entites.value = res
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getEntities()
})
</script>

<template>
  <div class="entities">
    <h1>Entity List Page</h1>
    <div class="entities__item" v-for="item of entites" :key="item.id">
      <span>{{ item.id }}</span>
      <span>{{ item.title }}</span>
      <span>{{ item.body }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.entities {
  padding: 0 2rem;
  font-family: sans-serif;
  h1 {
    font-size: 2rem;
  }
  &__item {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 2rem 1fr 5fr;
    gap: 1rem;
    border-bottom: 1px solid #999;
  }
}
</style>
