import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import * as auth from 'auth-provider'
import { AuthForm, User } from 'common/types/user'
import { request } from '../common/utils/request'

const bootStrapUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    const data = await request('me', { token })
    user = data.user
  }
  return user
}

const AuthContext = createContext<
  | {
      user: User | null
      login: (form: AuthForm) => Promise<void>
      register: (form: AuthForm) => Promise<void>
      logout: () => void
    }
  | undefined
>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (form: AuthForm) => auth.login(form).then(user => setUser(user))
  const register = (form: AuthForm) =>
    auth.register(form).then(user => setUser(user))
  const logout = () => {
    auth.logout()
    setUser(null)
  }

  useEffect(() => {
    bootStrapUser().then(setUser)
  }, [])

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  )
}

// useAuth hook
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth只能在AuthProvider中使用')
  }

  return context
}
