import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom'
import Notes from './Pages/notes.jsx'
import NavBar from './Components/navBar.jsx'
import Post from './Pages/post.jsx'
import axios from 'axios'



function App() {
 

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Notes/>} />
          <Route path="/post" element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
