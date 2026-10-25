import React from 'react'
import { Router } from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
// https://dummyjson.com/products
const App = () => {
  return (

    <div>
      <ProductProvider>
        <RouterProvider router={Router} />
      </ProductProvider>
    </div>

  )
}

export default App