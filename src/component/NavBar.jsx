import React from 'react'
import TopTrending from './TopTrending'
import TopRated from './TopRated'

const NavBar = () => {
  return (
    <div>
      <div className='flex justify-center gap-7 bg-amber-100 p-3'>
        <TopTrending param='feachTopTrending' />
        <TopRated param='feachTopRated' />
      </div>
    </div>
  )
}

export default NavBar
