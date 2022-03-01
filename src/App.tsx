import React from 'react'
import logo from './logo.svg'
import './App.css'

import ProjectList from 'apps/project-list'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ProjectList />
      </header>
    </div>
  )
}

export default App
