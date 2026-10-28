import { useContext, createContext, useEffect, useState } from 'react'

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    const [wishlist, setWishlist] = useState(() => {
        try {
            const saved = localStorage.getItem('wishlist')
            return saved ? JSON.parse(saved) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
        } catch (e) {
            console.error('Failed to save wishlist', e)
        }
    }, [wishlist])

    const toggleWishlist = (product) => {
        if (!product || !product.id) return
        setWishlist((prev) => {
            const exists = prev.some((item) => item.id === product.id)
            if (exists) {
                return prev.filter((item) => item.id !== product.id)
            } else {
                return [...prev, product]
            }
        })
    }

    useEffect(() => {
        const fetchprod = async () => {
            try {
                setloading(true)
                const product = await fetch('https://dummyjson.com/products?limit=194')
                const proddata = await product.json()
                setdata(proddata.products)
            } catch (error) {
                seterror(error)
            } finally {
                setloading(false)
            }
        }

        fetchprod()
    }, [])

    return (
        <ProductContext.Provider value={{ data, loading, error, wishlist, toggleWishlist }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => {
    return useContext(ProductContext)
}
