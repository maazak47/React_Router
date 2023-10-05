import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Home from "./componets/home"
import About from "./componets/about"
import Contact from "./componets/contact"
import Navbar from "./componets/navbar"
function App() {
 

  return (
    <>
     <Navbar/>
    <Routes>
      <Route path='home' element = {<Home/>}/>
      <Route path="about" element = {<About/>}/>
      <Route path='Contact' element = {<Contact/>}> 
       <Route path='manager contact' element={<><p style={{ fontSize: "30px",color: "blue"}}>manager contact number : 77298****  </p></>}/>
       <Route path='owner contact' element={< ><p style={{ fontSize: "30px",color: "blue"}}>owner  mail Address : mdaltamas@yahoo.com</p></>}/>
      </Route>
      <Route path='*' element={<><h1>Error 404 not found</h1></>} />
    </Routes>
    </>
  )
};

export default App
