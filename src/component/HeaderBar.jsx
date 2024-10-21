import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from './MenuItem'
import Home from './Home'
import About from './About'

const HeaderBar = () => {
  return (
    <>
      <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
          <NavLink to='/'>
            <Home />
          </NavLink>
          <NavLink to='about'>
            <About />
          </NavLink>
        </div>
        <div className='flex items-center gap-4'>
          <NavLink to='/' className='flex gap-1 items-center'>
            {' '}
            <span className='text-2xl hidden sm:inline'>TMBD</span>
            <p className='text-2xl font-bold bg-amber-500 py-1 px-1 rounded-[0.5rem]'>
              Clone
            </p>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default HeaderBar
