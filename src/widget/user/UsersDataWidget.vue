<script setup lang="ts">
import { UserDataCard } from '@/features/user'
import type { UserDataWithValue } from '@/entities/user/types'

defineProps<{ data: UserDataWithValue[] }>()
</script>

<template>
  <ul class="grid gap-3">
    <li class="item" v-for="user in data" :key="user.id">
      <UserDataCard
        :name="user.name"
        :metrics="user.metrics"
        :image="user.image"
        v-model="user.value"
      />
    </li>
  </ul>
</template>

<style scoped>
.item::after {
  content: '';
  display: inline-block;
  transform: translate(44px, calc(-50% + 24px));
  width: 10px;
  height: 33px;
  background-image: url('/public/vector.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.item:last-child::after {
  display: none;
}
</style>
