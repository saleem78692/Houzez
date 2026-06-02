import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './Componants/Navbar'
import Home from './Componants/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App