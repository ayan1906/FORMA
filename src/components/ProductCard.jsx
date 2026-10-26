import React from 'react'
import { ArrowRight, Heart, Star, MoveRight } from 'lucide-react'
const ProductCard = ({ image, title, price, rating, review }) => {
  return (
 
    <div className=' relative bg-[#e4e3e3] rounded-xl cursor-pointer hover:scale-105 transition duration-300' >
      <img className='bg-[#ECEBE7] rounded-xl xl:h-60 xl:w-80' src={image} alt="" />
      <Heart className='cursor-pointer absolute top-3 right-4' />
      <div className='p-3 flex flex-col gap-2'>
        <h3 className='text-md'>{title}</h3>
        <h2 className='text-lg font-medium'>${price}</h2>
        <div className='flex items-center gap-2'>
          <h4 className='flex items-center gap-2 text-sm font-medium text-[#865803]'><Star className='w-4 h-4 text-[#ffa805] fill-amber-500' /> {rating}  </h4>
          <h5 className='text-xs text-gray-800'>({review})</h5>
        </div>
      </div>
    </div>

  )
}

export default ProductCard