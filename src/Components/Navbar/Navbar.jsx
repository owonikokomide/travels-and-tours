import React, {useState} from 'react'
import "./navbar.css"
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

function Navbar() {
    const [active, setActive] = useState('navBar')
    // fuctin to toggle navbar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

    // fuctin to remove navbar
    const removeNavbar = () =>{
        setActive('navBar')
    }
  return (
   <section className='navBarSection'>
    <header className='header flex'>
      <div className="logoDiv">
        <a href="#" className='logo flex'>
            <h1>
                <MdOutlineTravelExplore className='icon' />
               Owonikoko Travels.
            </h1>
            </a>
      </div>
      <div className={active}>
        <ul className="navLists flex">
           <li className="navItem">
            <a href="#" className="navLink">Home</a>
           </li>
           <li className="navItem">
            <a href="#" className="navLink">Package</a>
           </li>
           <li className="navItem">
            <a href="#" className="navLink">Shop</a>
           </li>
           <li className="navItem">
            <a href="#" className="navLink">About</a>
           </li>
           <li className="navItem">
            <a href="#" className="navLink">Pages</a>
           </li>
           <li className="navItem">
            <a href="#" className="navLink">News</a>
           </li>
           <li className="navItem">
            <a href="#" className="navLink">Contact</a>
           </li>

           <button className="btn">
            <a href="#">Book Now</a>
           </button>
           <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
           </div>
        </ul>
      </div>
      <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className='icon' />
      </div>
    </header>
   </section>
  )
}

export default Navbar
