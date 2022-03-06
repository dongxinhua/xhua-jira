import React from 'react'
import logo from './logo.svg'
import './App.css'

// import ProjectList from 'apps/project-list'
import XhuaList from 'apps/xhua-list'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <ProjectList /> */}
        <XhuaList />
      </header>
    </div>
  )
}

export default App
