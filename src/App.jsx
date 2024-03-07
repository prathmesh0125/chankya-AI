import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Features from './component/Features'
import Newslater from './component/Newslater'
// import './App.css'
import "./styles/locomotive-scrool.css"

function App() {
 

  return (
    <div className='body'>
     <Navbar/>
     <Hero/>
     <Features/>
     <Newslater/>
    </div>
  )
}

export default App
