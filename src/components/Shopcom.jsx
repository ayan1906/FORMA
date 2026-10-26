import React, { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductLoader from '../components/ProductLoader'
import ProductCard from '../components/ProductCard'

import GlideSelect from './GlideSelect';

const formats = [
    { value: 'Featured', label: 'Featured',  },
    { value: 'Popular', label: 'Popular',  },
    { value: 'Low to High', label: 'Price (Low to High)', },
    { value: 'High to Low', label: 'Price (High to Low)', },

];



const Shopcom = () => {
    const { data, loading, error } = useProducts()
    const [randomproduct, setrandomproduct] = useState([])
    if (loading) return <ProductLoader />
    if (error) return <h1>Error here</h1>
    const randomprod = data ? [...data].sort(() => 0.5 - Math.random()) : [];

    return (
        <div>
            <div className='w-full flex'>
                <div className="left w-[20%]">
                    <h1>hello</h1>
                </div>
                <div className="right w-[80%]">
                    <div className='flex items-center justify-between mt-8 mx-12'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-xl tracking-wide'>All Product</h1>
                            <p className='text-sm text-gray-600'>Showing 1-12 of 120 products</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <h3 className='text-base font-bold'>Sort by</h3>
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
                </div>
            </div>
        </div>
    )
}

export default Shopcom