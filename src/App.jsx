import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Home'
import Form from './Form'

function App() {

  return (
    <div className="App">
      
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      </Routes>

     </BrowserRouter>
    </div>
  )
}

export default App
