import { useAuth } from 'context/auth-context'

import XhuaList from './apps/xhua-list'

const LoginedPage = () => {
  const { user, logout } = useAuth()

  console.log(user)

  return (
    <>
      <>
        <span>登录成功</span>
        <button onClick={() => logout()}>退出登录</button>
      </>
      <XhuaList />
    </>
  )
}

export default LoginedPage
