export type UserData = {
  name: string
  metrics: string
  image: string
}

export type UserDataWithId = UserData & {
  id: string | number
}

export type UserDataWithValue = UserDataWithId & {
  value: string
}
