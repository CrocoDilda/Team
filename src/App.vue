<script setup lang="ts">
import { onMounted } from 'vue'
import { UsersDataWidget } from '@/widget/user'
import { useUsers } from './features/user/model'
import { useUsersStore } from './entities/user/model'
import { storeToRefs } from 'pinia'

const { usersData } = storeToRefs(useUsersStore())
const { getUsersData } = useUsers()

onMounted(() => getUsersData())
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center w-screen h-screen">
    <UsersDataWidget :data="usersData" />

    <ul>
      <li class="flex gap-1 text-[1rem]" v-for="user in usersData" :key="user.id">
        {{ user.name }} is
        <p class="text-(--primary)">{{ user.value || '---' }}</p>
        {{ user.metrics }}
      </li>
    </ul>
  </div>
</template>
