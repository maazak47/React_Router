import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
      <li><NavLink to="/home">home</NavLink></li>  
        <li> <NavLink to="/contact">contact</NavLink></li>
       <li> <NavLink to="/about">about</NavLink></li>
          
     </ul>
    </div>
  )
}

export default Navbar;
