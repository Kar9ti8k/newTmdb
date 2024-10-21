import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const TopRated = ({ param }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const genre = searchParams.get('genre')
  const handleClick = () => {
    searchParams.set('genre', param)
    navigate(`?${searchParams.toString()}`)
  }
  return (
    <div>
      <NavLink
        onClick={handleClick}
        className={`hover:text-amber-500 font-semibold${
          genre === param
            ? ' underline underline-offset-8 decoration-4 decoration-amber-500 rounded-[1rem]'
            : ''
        }`}
        to={`/?genre=${param}`}
      >
        TopRated
      </NavLink>
    </div>
  )
}

export default TopRated
