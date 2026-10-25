import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import { createBrowserRouter } from 'react-router-dom'
export const Router = createBrowserRouter([
    {
        path: '/' , 
        element:<MainLayout/> ,
        children: [
            {
                path: '/',
                element : <Home/>
            }
        ]
    }
])
