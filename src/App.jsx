import React from 'react'
import Home from './pages/home'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App