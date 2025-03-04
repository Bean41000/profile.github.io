import { useState } from 'react'
import Footer from './components/Footer'
import About from './components/About'
import Contect from './components/Contect'
import './App.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import '../src/components/comstyle.css'

function App() {

  return (
    <>
    <header className='header'>
    <nav className='navbar'>
        <a href="#About">About A5 helloworld</a>
        <a href="#Contect">Contect</a>
        <a href="#new">New Menu</a>
    </nav>
    </header>
    <section id='About'>
      <About></About>
    </section>
    <hr />
    <section id='Contect'>
      <Contect></Contect>
    </section>
    <Footer></Footer>
    </>
  )
}

export default App

// กำหนด section เพื่อนำทาง nav ไปสู่ส่วนที่ต้องการจะให้ปรากฏเห็น
// อ้างอิง https://www.youtube.com/watch?v=rozaY_vx5WQ แรงบัลดาลใจในการปรับปรุงให้ดูใช้งานได้ง่าย