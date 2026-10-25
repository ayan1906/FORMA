import React from 'react'
import { Router } from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
// https://dummyjson.com/products
const App = () => {
  return (

    <RouterProvider router={Router}/>

  )
}

export default App