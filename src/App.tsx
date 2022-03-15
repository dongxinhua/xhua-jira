import React from 'react'
import logo from './logo.svg'
import './App.css'

// import ProjectList from 'apps/project-list'
// import XhuaList from 'apps/xhua-list'
// import TsReactTest from 'apps/try-use-array'
import Login from 'apps/login'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <ProjectList /> */}
        {/* <XhuaList /> */}
        {/* <TsReactTest /> */}
        <Login />
      </header>
    </div>
  )
}

export default App
