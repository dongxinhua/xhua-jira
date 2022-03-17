import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { DevTools, loadServer } from 'jira-dev-tool'
import { AppPorviders } from 'context'
import 'antd/dist/antd.less'

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <DevTools />
      <AppPorviders>
        <App />
      </AppPorviders>
    </React.StrictMode>,
    document.getElementById('root')
  )
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
