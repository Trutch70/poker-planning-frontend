import {defineStore} from 'pinia'

type RoomUsernames = Record<string, string>

export const useUserStore = defineStore('user', {
    state: () => {
      return {roomUsernames: {} as RoomUsernames};
    },
    actions: {
      setUsername(room: string, value: string) {
        this.roomUsernames[room] = value;
      },
    },
    persist: true,
  },
)
