import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  username: string
  // 其他用户信息...
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: async (username: string, password: string) => {
        // 这里应该调用你的登录 API
        // 示例：模拟登录
        const fakeUser = { id: '1', username }
        const fakeToken = 'fake-token'

        set({
          user: fakeUser,
          token: fakeToken,
          isAuthenticated: true
        })
      },
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false
        })
      }
    }),
    {
      name: 'auth-storage'
    }
  )
) 