import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ProductLoader from '../components/ProductLoader'
import { useProducts } from '../context/ProductContext'

const Wish = () => {
  const { wishlist, loading, error } = useProducts()
  const navigate = useNavigate()

  if (loading) return <ProductLoader />
  if (error) return <h1 className="text-center mt-20 text-red-500 font-medium">Error loading product details</h1>

  return (
    <div className='mx-4 sm:mx-10 my-8'>
      <div className='flex flex-col gap-1 my-6'>
        <h1 className='font-bold text-2xl tracking-wide'>My Wishlist</h1>
        <p className='text-sm text-gray-600'>
          {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className='flex flex-col items-center justify-center py-20 text-gray-500 gap-3'>
          <p className='text-lg font-medium text-gray-700'>Your wishlist is empty</p>
          <p className='text-sm text-gray-500'>Explore our products and tap the heart icon to save your favorites.</p>
          <button
            onClick={() => navigate('/shop')}
            className='mt-3 px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition cursor-pointer'
          >
            Explore Shop
          </button>
        </div>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
          {wishlist.map((item) => (
            <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
              <ProductCard
                id={item.id}
                image={item.image || item.images?.[0]}
                title={item.title}
                price={item.price}
                rating={item.rating}
                review={item.review ?? item.reviews?.length ?? 0}
                item={item}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wish
