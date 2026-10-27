import React from 'react'
import { Heart, Star } from 'lucide-react'

const ProductCard = ({ image, title, price, rating, review }) => {
  return (
    <div className='group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full'>
      
      {/* Product Image Container */}
      <div className='relative w-full bg-[#F3F3F1] overflow-hidden aspect-4/3 sm:aspect-square xl:h-60'>
        <img 
          className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500' 
          src={image} 
          alt={title || 'Product Image'} 
        />
        
        {/* Wishlist Heart Button */}
        <button 
          aria-label="Add to wishlist"
          className='absolute cursor-pointer top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md text-gray-700 hover:text-red-500 hover:bg-white transition-colors duration-200 shadow-sm'
        >
          <Heart className='w-4 h-4' />
        </button>
      </div>

      {/* Product Details Container */}
      <div className='p-4 flex flex-col justify-between flex-grow gap-3'>
        <div className='flex flex-col gap-1.5'>
          {/* Title */}
          <h3 className='text-sm sm:text-base font-normal text-gray-800 line-clamp-1 group-hover:text-amber-600 transition-colors'>
            {title}
          </h3>
          
          {/* Price */}
          <div className='text-base sm:text-lg font-semibold text-gray-950'>
            ${price}
          </div>
        </div>

        {/* Rating & Review Section */}
        <div className='flex items-center justify-between pt-1 border-t border-gray-100'>
          <div className='flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-md'>
            <Star className='w-3.5 h-3.5 text-amber-500 fill-amber-500' /> 
            <span className='text-xs font-semibold text-amber-900'>{rating}</span>
          </div>
          <span className='text-xs text-gray-500 font-medium'>
            ({review} reviews)
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard