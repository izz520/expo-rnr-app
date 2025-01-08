import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
interface State {
  count: number
}

interface Actions {
  increment: () => void
  decrement: () => void
}


export const useCount = create<State & Actions>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'count',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)