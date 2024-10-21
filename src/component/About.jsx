import React from 'react'
import { FcAbout } from 'react-icons/fc'
const About = () => {
  return (
    <>
      <div className='hover:text-amber-500'>
        <p className='uppercase hidden sm:inline'>About</p>
        <FcAbout className='sm:hidden text-3xl' />
      </div>
    </>
  )
}

export default About
