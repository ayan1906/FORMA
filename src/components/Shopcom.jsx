import React, { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductLoader from '../components/ProductLoader'
import ProductCard from '../components/ProductCard'


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
                    <h1>hey</h1>
                </div>
            </div>
        </div>
    )
}

export default Shopcom