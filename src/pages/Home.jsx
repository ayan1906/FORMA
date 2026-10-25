import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { useProducts } from '../context/ProductContext'
import ProductLoader from '../components/ProductLoader'
const Home = () => {
  const { data, loading, error } = useProducts()
  if (loading) return <ProductLoader />
  if (error) return <h1>Error here</h1>


  const categories = [
    {
      name: "",
      image: ""
    },

  ]
  const category = ["Fragrances", "Laptops", "Mens-Shirts", "Smart Phones", "Sunglasses", "Womens-jewellery"]


  return (
    <div>
      <div className='flex items-center justify-around mt-10 lg:mt-20 overflow-hidden'>
        {/* Left Content */}
        <div className='mx-4 flex flex-col gap-2 lg:gap-6'>
          <h4 className='text-xs lg:text-base tracking-widest'>NEW COLLECTION</h4>
          <h1 className='text-2xl lg:text-6xl font-bold'>Minimal Style <br />Maximum You</h1>
          <p className='text-sm lg:text-[16px] tracking-wider'>
            Discover premium products for your everyday life. <br />
            <span className='hidden lg:flex'>Clean design, Better living</span>
          </p>
          <button className='group flex items-center justify-start cursor-pointer border border-black text-sm w-32 px-4 py-2.5 rounded-full bg-black text-white font-bold gap-2 hover:bg-white hover:text-black transition duration-200'>
            Shop Now <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition duration-200' />
          </button>
        </div>

        {/* Right Image */}
        <div className='flex'>
          <img className='rounded-xl lg:rounded-4xl w-100 lg:w-120 h-60 lg:h-100 p-2 object-cover' src="home.avif" alt="Collection" />
        </div>
      </div>


      {category?.map((cat, index) => (
        <div key={index}>
          <h1>{cat}</h1>
        </div>
      ))}
    </div>
  )
}

export default Home