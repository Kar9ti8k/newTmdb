import React from 'react'
import { AiFillHome } from 'react-icons/ai'
const Home = () => {
  return (
    <div className='hover:text-amber-500'>
      <p className='uppercase hidden sm:inline'>Homel</p>
      <AiFillHome className='sm:hidden text-3xl' />
    </div>
  )
}

export default Home
