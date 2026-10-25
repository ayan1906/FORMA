import React from 'react'
import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className=' overflow-hidden flex items-center justify-around  mt-10 lg:mt-20'>
      <div className='mx-4 flex flex-col gap-2 lg:gap-6'>
        <h4 className='text-xs lg:text-base tracking-widest'>NEW COLLECTION</h4>
        <h1 className='text-2xl lg:text-6xl font-bold'>Minimal Style <br />Maximum You</h1>
        <p className='text-sm lg:text-[16px] tracking-wider'>Discover premium products for your everyday life. <br /> <span className='hidden lg:flex'>Clean design, Better living</span></p>
        <NavLink to={'/shop'}><button className='group flex items-center justify-start cursor-pointer border border-black text-sm w-34 px-4 py-2.5 rounded-full bg-black text-white font-bold gap-2 hover:bg-white hover:text-black transition duration-200'>Shop Now <ArrowRight className='w-4 h-4 group-hover:translate-x-2 transition duration-200' /></button></NavLink>
      </div>
      <div className='flex'>
        <img className='rounded-xl lg:rounded-4xl w-100 lg:w-120 h-60 lg:h-100  p-2' src="home.avif" alt="" />
      </div>
    </div>
  )
}

export default Home