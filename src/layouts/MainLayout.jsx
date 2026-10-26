import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='relative z-10 flex min-h-screen bg-[#F8F7F5] flex-col'>
            <Navbar />
            <main className='flex flex-1 flex-col'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout