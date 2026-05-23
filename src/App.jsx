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
        <Route path='/property' element={<h1>Property</h1>}/>
      </Routes>
    </div>
  )
}

export default App