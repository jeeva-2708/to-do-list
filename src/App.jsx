import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'


function App() {
  

  return (
    <>
      <Header/>
      <div className='container'>
      <TaskForm/>
      <TaskList/>
      </div>
    </>
  )
}

export default App
