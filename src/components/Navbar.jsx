import { useState } from "react"
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import React from "react";
function Navbar() {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(prev => !prev)
  }
  return (

    <>
    <nav className=" p-6 sm md:flex tracking-wide justify-center-safe items-center">
          <div className="md:hidden z-20 cursor-pointer" onClick={toggleMenu}>
        {menu ? <FaTimes size={24}/> : <FaBars size={24}/>}
      </div>
        <ul className="hidden md:flex space-x-12 font-bold text-xl"> 
            <li className="hover:text-blue-500"><a href="#home">Home</a></li>
            <li className="hover:text-blue-500"><a href="#about">About</a></li>
            <li className="hover:text-blue-500"><a href="#destination">Destination</a></li>
            <li className="hover:text-blue-500"><a href="#contact">Contact</a></li>
        </ul>
        {menu && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center space-y-4 p-6 font-bold text-xl">
            <li className="hover:text-blue-500"><a href="#home">Home</a></li>
            <li className="hover:text-blue-500"><a href="#about">About</a></li>
            <li className="hover:text-blue-500"><a href="#destination">Destination</a></li>
            <li className="hover:text-blue-500"><a href="#contact">Contact</a></li>
          </ul>
        )}
    </nav> 
    </>
  )
}

export default Navbar
