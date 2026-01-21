import type { UseUsers } from './types'
import { useUsersStore } from '@/entities/user/model'

export const useUsers = (): UseUsers => {
  const { setUsersData } = useUsersStore()

  //Let's imagine that this is the data returned by the backend.
  const getUsersData = () => {
    setUsersData([
      {
        id: 1,
        name: 'Samuel',
        metrics: 'Hours old',
        image:
          'https://images.stockcake.com/public/8/6/8/868b49ee-882a-4e28-9984-d15ea43bcfc7_medium/cool-street-cat-stockcake.jpg',
      },

      {
        id: 2,
        name: 'Alex',
        metrics: 'Days old',
        image:
          'https://images.stockcake.com/public/8/7/6/876cd021-c36d-4f0c-b737-513fa9df7cd5_medium/stylish-feline-relaxing-stockcake.jpg',
      },

      {
        id: 3,
        name: 'John',
        metrics: 'Years old',
        image:
          'https://64.media.tumblr.com/a8a4778ad80ec3d0bf17c90d922c6532/e1b0eb7a0f222b04-33/s400x600/d4df4c43567d1023f3d136cd48eb052273ae6bfa.jpg',
      },
    ])
  }

  return { getUsersData }
}
