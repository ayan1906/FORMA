import { useContext, createContext, useEffect, useState } from 'react'

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

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




    return <ProductContext.Provider value={{ data, loading, error }}>
        {children}
    </ProductContext.Provider>
}

export const useProducts = () => {
    return useContext(ProductContext)
}

