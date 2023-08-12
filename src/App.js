import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Users from './Components/Users'
import { Routes, Route } from "react-router-dom"
import Todos from './Components/Todos'
import Photos from './Components/Photos'
import Albums from './Components/Albums'
import Comments from './Components/Comments'
import Posts from './Components/Posts'

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path="/todos" element={<Todos/>}/>
      <Route path="/photos" element={<Photos/>}/>
      <Route path="/albums" element={<Albums/>}/>
      <Route path="/comments" element={<Comments/>}/>
      <Route path="/posts" element={<Posts/>}/>
    </Routes>
    </>
  )
}