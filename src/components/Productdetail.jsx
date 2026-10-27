import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductLoader from './ProductLoader'
import { Star, ShoppingBag, Heart, Minus, Plus, Truck, RotateCcw, ShieldCheck } from 'lucide-react'

const Productdetail = () => {
    const { data, loading, error } = useProducts()
    const params = useParams()
    
    const [quantity, setQuantity] = useState(1)
    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedColor, setSelectedColor] = useState('bg-[#f3eee2]')
    const [selectedSize, setSelectedSize] = useState('M')
    const [activeTab, setActiveTab] = useState('description')

    if (loading) return <ProductLoader />
    if (error) return <h1 className="text-center mt-20 text-red-500 font-medium">Error loading product details</h1>

const featprod = data.filter((item) => params.id.includes(item.id)).at(-1)

    if (!featprod) {
        return <h1 className="text-center mt-20 text-lg font-medium text-gray-600">Product not found</h1>
    }

    const handleIncrement = () => setQuantity((prev) => prev + 1)
    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

    const colors = [
        { name: 'Off White', class: 'bg-[#f3eee2]' },
        { name: 'Black', class: 'bg-black' },
        { name: 'Beige', class: 'bg-[#e5c185]' },
        { name: 'Gray', class: 'bg-gray-500' }
    ]

    const sizes = ['S', 'M', 'L', 'XL']

    return (
        <div className="max-w-7xl mx-auto px-6 py-16 font-sans text-neutral-900 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Side: Minimalist Gallery */}
                <div className="flex gap-4">
                    <div className="flex flex-col gap-3">
                        {featprod.images?.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedImage(i)}
                                className={`w-20 h-20 rounded-lg overflow-hidden border cursor-pointer transition ${
                                    selectedImage === i ? 'border-black opacity-100' : 'border-neutral-200 opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 h-[520px] bg-neutral-50 rounded-xl overflow-hidden flex items-center justify-center border border-neutral-100">
                        <img 
                            src={featprod.images?.[selectedImage] || featprod.thumbnail} 
                            alt={featprod.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side: Clean Details */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
                            {featprod.title}
                        </h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-neutral-900 font-semibold text-sm">
                            <Star className="w-4 h-4 fill-neutral-900" /> 
                            <span>{featprod.rating || 4.8}</span>
                        </div>
                        <span className="text-neutral-300">|</span>
                        <span className="text-sm text-neutral-500 font-normal">
                            ({featprod.reviews?.length || 120} reviews)
                        </span>
                    </div>

                    <div className="text-2xl font-bold text-neutral-900">
                        ${featprod.price}
                    </div>

                    <p className="text-neutral-600 text-sm leading-relaxed">
                        {featprod.description}
                    </p>

                    {/* Color Picker */}
                    <div className="flex flex-col gap-2.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Color</span>
                        <div className="flex items-center gap-3">
                            {colors.map((col, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedColor(col.class)}
                                    className={`w-7 h-7 rounded-full ${col.class} transition cursor-pointer ${
                                        selectedColor === col.class ? 'ring-2 ring-offset-2 ring-black' : 'opacity-80 hover:opacity-100'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size Selector */}
                    <div className="flex flex-col gap-2.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Size</span>
                        <div className="flex items-center gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 rounded-lg border text-sm font-medium transition cursor-pointer flex items-center justify-center ${
                                        selectedSize === size 
                                            ? 'border-black bg-black text-white' 
                                            : 'border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Actions */}
                    <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50 h-12">
                            <button 
                                onClick={handleDecrement}
                                className="px-3 text-neutral-600 hover:bg-neutral-200 transition cursor-pointer h-full flex items-center justify-center"
                            >
                                <Minus size={14} />
                            </button>
                            <span className="px-4 font-semibold text-neutral-900 text-sm">
                                {quantity}
                            </span>
                            <button 
                                onClick={handleIncrement}
                                className="px-3 text-neutral-600 hover:bg-neutral-200 transition cursor-pointer h-full flex items-center justify-center"
                            >
                                <Plus size={14} />
                            </button>
                        </div>

                        <button className="flex-1 bg-black text-white h-12 rounded-lg font-medium text-sm flex items-center justify-center gap-2.5 hover:bg-neutral-800 transition cursor-pointer">
                            <ShoppingBag size={18} /> Add to Cart
                        </button>

                        <button className="h-12 w-12 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition text-neutral-700 cursor-pointer flex items-center justify-center">
                            <Heart size={18} />
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-100">
                        <div className="flex items-center gap-2.5">
                            <Truck className="w-5 h-5 text-neutral-800" />
                            <div>
                                <h4 className="text-xs font-semibold text-neutral-900">Free Shipping</h4>
                                <p className="text-[10px] text-neutral-500">Orders over $50</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <RotateCcw className="w-5 h-5 text-neutral-800" />
                            <div>
                                <h4 className="text-xs font-semibold text-neutral-900">Easy Returns</h4>
                                <p className="text-[10px] text-neutral-500">7-day policy</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <ShieldCheck className="w-5 h-5 text-neutral-800" />
                            <div>
                                <h4 className="text-xs font-semibold text-neutral-900">Secure Pay</h4>
                                <p className="text-[10px] text-neutral-500">100% protected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Minimalist Tabs */}
            <div className="mt-24 border-t border-neutral-100 pt-8">
                <div className="flex gap-8 border-b border-neutral-100 pb-4">
                    {['description', 'specifications', 'reviews'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm font-semibold capitalize cursor-pointer pb-2 relative transition ${
                                activeTab === tab ? 'text-neutral-900 after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[2px] after:bg-black' : 'text-neutral-400 hover:text-neutral-700'
                            }`}
                        >
                            {tab} {tab === 'reviews' && `(${featprod.reviews?.length || 120})`}
                        </button>
                    ))}
                </div>

                <div className="py-6 text-neutral-600 text-sm leading-relaxed max-w-3xl">
                    {activeTab === 'description' && (
                        <p>{featprod.description} Designed with clean lines and premium finish for everyday elegance.</p>
                    )}
                    {activeTab === 'specifications' && (
                        <ul className="list-disc pl-5 flex flex-col gap-1.5 text-neutral-700">
                            <li>Category: <span className="capitalize font-medium text-neutral-900">{featprod.category}</span></li>
                            <li>Brand: <span className="font-medium text-neutral-900">{featprod.brand || 'Generic'}</span></li>
                            <li>Availability: <span className="font-medium text-neutral-900">{featprod.stock || 'In Stock'}</span></li>
                        </ul>
                    )}
                    {activeTab === 'reviews' && (
                        <div className="flex flex-col gap-3">
                            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="flex text-neutral-900"><Star size={12} className="fill-neutral-900" /><Star size={12} className="fill-neutral-900" /><Star size={12} className="fill-neutral-900" /><Star size={12} className="fill-neutral-900" /><Star size={12} className="fill-neutral-900" /></div>
                                    <span className="font-semibold text-neutral-900 text-xs">Exceptional Quality</span>
                                </div>
                                <p className="text-xs text-neutral-600">Clean minimalist design and premium feel. Extremely satisfied.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Productdetail