import { useState } from 'react'
import HomeLandPage from './component/HomeLandPage'
import Headerbar from './component/HeaderBar'
import NavBar from './component/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './component/About'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLandPage />,
      children: [
        {
          path: 'headerbar',
          element: <Headerbar />,
        },
        {
          path: 'headerbar',
          element: <NavBar />,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
