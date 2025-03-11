import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Mains from './Components/Mains/Mains'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <Mains />
     <Footer />
    </div>
  )
}

export default App