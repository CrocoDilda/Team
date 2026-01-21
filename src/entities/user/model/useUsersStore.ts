import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { UserDataWithId, UserDataWithValue } from '@/entities/user/types'

export const useUsersStore = defineStore('usersStore', () => {
  const usersData = reactive<UserDataWithValue[]>([])

  // Функция для обновления данных с добавлением поля `value`
  const setUsersData = (newData: UserDataWithId[]) => {
    usersData.length = 0

    newData.forEach((user) => {
      usersData.push({
        ...user,
        value: '',
      })
    })
  }

  return { usersData, setUsersData }
})
