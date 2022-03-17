// import React from 'react'
// import logo from './logo.svg'
import './App.css'

// import ProjectList from 'apps/project-list'
// import XhuaList from 'apps/xhua-list'
// import TsReactTest from 'apps/try-use-array'
// import Login from 'apps/login'
import { useAuth } from 'context/auth-context'
import PreLoginPage from 'pre-login-app'
import LoginedPage from 'logined-app'

function App() {
  const { user } = useAuth()
  console.log(user)
  return (
    <div className='App'>
      {/* <header className='App-header'> */}
      {/* <ProjectList /> */}
      {/* <XhuaList /> */}
      {/* <TsReactTest /> */}
      {/* <Login /> */}
      {user ? <LoginedPage /> : <PreLoginPage />}
      {/* </header> */}
    </div>
  )
}

export default App
