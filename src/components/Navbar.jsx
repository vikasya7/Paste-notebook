import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly w-[100vw]  bg-slate-600 h-8'>
        <NavLink  
        className='hover:scale-[1.2]'
        to="/"         
         >
            Home
        </NavLink>
        
        

        <NavLink
        className='hover:scale-[1.2]'
        to="/pastes"
        >
            Pastes
        </NavLink>
    </div>
  )
}

export default Navbar
