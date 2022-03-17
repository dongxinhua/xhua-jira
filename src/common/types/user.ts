export interface User {
  name: string
  id: string
  email: string
  title: string
  organization: string
  token: string
}

export interface AuthForm {
  username: string
  password: string
}
