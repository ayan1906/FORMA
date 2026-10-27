import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import Shop from '../pages/Shop'
import Categories from '../pages/Categories'
import About from '../pages/About'
import Wishlist from '../pages/Wishlist'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Productdetail from '../components/Productdetail'

export const Router = createBrowserRouter([
    {
        path: '/' , 
        element:<MainLayout/> ,
        children: [
            {
                path: '/',
                element : <Home/>
            },
            {
                path: '/shop',
                element : <Shop/>
            },
            {
                path: '/categories',
                element : <Categories/>
            },
            {
                path: '/about',
                element : <About/>
            },
            {
                path: '/wishlist',
                element : <Wishlist/>
            },
            {
                path: '/cart',
                element : <Cart/>
            },
            {
                path: '/login',
                element : <Login/>
            },
            {
                path: '/product/:id',
                element : <Productdetail/>
            },
            
        ]
    }
])
