import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Filter, ListSortAscending } from 'lucide-react'
import { useProducts } from '../context/ProductContext'
import ProductLoader from '../components/ProductLoader'
import ProductCard from '../components/ProductCard'

import GlideSelect from './GlideSelect';

const formats = [
    { value: 'Featured', label: 'Featured', },
    { value: 'Popular', label: 'Popular', },
    { value: 'Low to High', label: 'Price (Low to High)', },
    { value: 'High to Low', label: 'Price (High to Low)', },

];


const Shopcom = () => {
    const { data, loading, error } = useProducts()
    const [displayprod, setdisplayprod] = useState(12)
    const [prod, setprod] = useState([])
    const [price, setPrice] = useState(500)
    const [isCategoryOpen, setIsCategoryOpen] = useState(true)
    const [isBrandOpen, setIsBrandOpen] = useState(true)
    if (loading) return <ProductLoader />
    if (error) return <h1>Error here</h1>

    const randomprod = data ? [...data].sort(() => 0.5 - Math.random()) : [];
    const displaycard = prod.slice(0, displayprod)
    setprod(randomprod)

    const handleloadmore = () => {
        setdisplayprod((prev) => prev + 12)
    }
    return (
        <div>
            <div className='w-full flex'>
                <div className="left w-[20%] hidden lg:block">
                    <aside className='w-full max-w-xs  border border-gray-100 rounded-2xl p-5 shadow-sm font-sans'>

                        {/* Header */}
                        <div className='flex items-center justify-between pb-4 mb-4 border-b border-gray-100'>
                            <h2 className='text-lg font-semibold text-gray-900 flex items-center gap-2'>
                                <Filter className='w-5 h-5 text-amber-600' /> Filters
                            </h2>
                            <button className='cursor-pointer text-xs font-medium text-amber-600 hover:underline'>
                                Reset All
                            </button>
                        </div>

                        {/* Category Section */}
                        <div className='mb-6'>
                            <button
                                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                className='w-full flex items-center justify-between text-sm font-semibold text-gray-800 mb-3'
                            >
                                Category
                                {isCategoryOpen ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
                            </button>

                            {isCategoryOpen && (
                                <div className='flex flex-col gap-2.5 text-sm text-gray-600'>
                                    {['All Categories', "Men's Fashion", "Women's Fashion", 'Electronics', 'Home & Living', 'Accessories', 'Beauty'].map((cat, idx) => (
                                        <label key={idx} className='flex items-center gap-3 cursor-pointer hover:text-gray-900'>
                                            <input
                                                type='radio'
                                                name='category'
                                                defaultChecked={idx === 0}
                                                className='w-4 h-4 text-amber-600 focus:ring-amber-500 border-gray-300'
                                            />
                                            {cat}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Price Range Section */}
                        <div className='mb-6 pb-6 border-b border-gray-100'>
                            <h3 className='text-sm font-semibold text-gray-800 mb-3'>Price Range</h3>
                            <input
                                type='range'
                                min='0'
                                max='1000'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className='w-full accent-amber-600 cursor-pointer'
                            />
                            <div className='flex justify-between items-center mt-2 text-sm font-medium text-gray-700'>
                                <span>$0</span>
                                <span className='bg-amber-50 text-amber-800 px-2 py-0.5 rounded text-xs font-semibold'>${price}</span>
                                <span>$1000</span>
                            </div>
                        </div>

                        {/* Brand Section */}
                        <div>
                            <button
                                onClick={() => setIsBrandOpen(!isBrandOpen)}
                                className='w-full flex items-center justify-between text-sm font-semibold text-gray-800 mb-3'
                            >
                                Brand
                                {isBrandOpen ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
                            </button>

                            {isBrandOpen && (
                                <div className='flex flex-col gap-2.5 text-sm text-gray-600'>
                                    {['Nike', 'Asus', 'Rolex', 'Apple', 'Puma'].map((brand, idx) => (
                                        <label key={idx} className='flex items-center gap-3 cursor-pointer hover:text-gray-900'>
                                            <input
                                                type='checkbox'
                                                className='w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-gray-300'
                                            />
                                            {brand}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                    </aside>
                </div>
                <div className="right w-full xl:w-[80%]">
                    <div className='flex items-center justify-between mt-8 mx-12'>
                        <div className='hidden xl:block flex flex-col gap-1'>
                            <h1 className='font-bold text-xl tracking-wide'>All Product</h1>
                            <p className='text-sm text-gray-600'>Showing 1-{displayprod} of {randomprod.length} products</p>
                        </div>
                        <h2 className='xl:hidden border border-[#b3b1b1] rounded px-4 py-1 flex items-center gap-2 cursor-pointer '><Filter size={18} /> Filter</h2>
                        <div className='flex items-center gap-4'>
                            <h3 className='hidden xl:block text-base font-bold flex items-center gap-2'> Sort by</h3>

                            <GlideSelect
                                options={formats}
                                defaultValue="png"
                                onChange={(value, option) => console.log(value, option)}
                                ariaLabel="Category"

                                accentColor='#000000'
                                surfaceColor='#ffffff'
                                highlightColor='#eeeeee'
                                textColor='#000000'
                                size="md"
                                radius={10}
                                menuWidth={176}
                                placement="bottom"
                                align="left"
                                popDuration={180}
                                glideDuration={220}
                                rememberPosition
                                disabled={false}
                                className='border rounded-md border-[#dedee0]' />

                        </div>
                    </div>
                    <div className=' grid grid-cols-2 xl:grid-cols-4 gap-4 mt-2 mx-3 mx-12'>
                        {displaycard.map((prod, index) => (
                            <div key={index}>
                                <ProductCard image={prod.images[0]} title={prod.title} price={prod.price} rating={prod.rating} review={prod.reviews.length} />
                            </div>
                        ))}
                    </div>
                    <button onClick={handleloadmore} className='group mx-auto flex items-center justify-start cursor-pointer border border-black text-sm mt-8 px-4 py-2.5 rounded-full bg-black text-white font-bold gap-2 hover:bg-white hover:text-black transition duration-200'>
                        Load More
                    </button>
                </div>
            </div>

        </div>

        
    )
}

export default Shopcom