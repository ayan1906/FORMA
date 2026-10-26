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
      name: "Fragrances",
      image: "/category/frag.png"
    },
    {
      name: "Laptops",
      image: "/category/laptop.png"
    },
    {
      name: "Mens-Shirts",
      image: "/category/mensshirt.png"
    },
    {
      name: "Smart Phones",
      image: "/category/phone.png"
    },
    {
      name: "Sunglasses",
      image: "/category/sunglass.png"
    },
    {
      name: "Womens-jewellery",
      image: "/category/jewel.png"
    },

  ]
  // const category = ["Fragrances", "Laptops", "Mens-Shirts", "Smart Phones", "Sunglasses", "Womens-jewellery"]


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
          <button className='group flex items-center justify-start cursor-pointer border border-black text-sm w-32 mt-4 px-4 py-2.5 rounded-full bg-black text-white font-bold gap-2 hover:bg-white hover:text-black transition duration-200'>
            Shop Now <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition duration-200' />
          </button>
        </div>

        {/* Right Image */}
        <div className='flex'>
          <img className='rounded-xl lg:rounded-4xl w-100 lg:w-120 h-60 lg:h-100 p-2 object-cover' src="home.avif" alt="Collection" />
        </div>
      </div>


      <h2 className='mt-10 ml-3  text-lg lg:text-xl  uppercase font-mono tracking-wider'>Featured Category</h2>
      <div className='grid grid-cols-4 lg:grid-cols-6 gap-4 mt-2 mx-3'>
        {categories?.map((cat, index) => (
          <div className={`${index >= 4 ? 'hidden lg:block' : 'block'}  bg-[#e4e3e3] rounded-xl py-2`} key={index}>
            <div className='flex flex-col items-center justify-center cursor-pointer group'>
              <img className=' w-30 h-24 lg:w-46 lg:h-50 group-hover:scale-110 transition duration-300' src={cat.image} alt="" />
              <h1 className='text-sm font-medium text-[#1f1f1fe5]'>{cat.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home