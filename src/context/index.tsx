import { ReactNode } from 'react'
import { AuthProvider } from './auth-context'

export const AppPorviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>
}
