import { FormEvent } from 'react'

// import { AuthForm } from 'common/types/user'
import { useAuth } from 'context/auth-context'

// const baseUrl = process.env.REACT_APP_API_URL

const Register = () => {
  const { register } = useAuth()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    register({ username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>用户名</label>
      <input type='text' id='username' />
      <label htmlFor='password'>密码</label>
      <input type='password' id='password' />
      <button type='submit'>注册</button>
    </form>
  )
}

export default Register
