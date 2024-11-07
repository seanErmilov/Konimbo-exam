import React, { useState } from 'react'
import { useFetchProducts } from "../../api/Products/Products.api.hooks.js"
import { Typography } from "@material-tailwind/react"
import { ProductsGrid } from "./components/ProductsGrid.jsx"
import { AppSpinner } from "../../components/AppSpinner.jsx"
import { ProductsSearch } from './components/ProductsSearch.jsx'

export function HomePage() {

    const [filterBy, setFilterBy] = useState({ title: '' })

    function filterProdacts(products, filterBy) {
        return products.filter((product) => product.title.toLowerCase().includes(filterBy.title))
    }

    const { data, isLoading } = useFetchProducts()
    console.log(data)

    if (isLoading) {
        return <AppSpinner />
    }

    //todo: make sure this hook works and understand, then remove it
    // useEffect(
    //     () => {
    //         async function fetchData() {
    //             try {
    //                 console.log('Fetching products...')
    //                 const messages = await productService.query()
    //                 setProducts(messages)
    //                 console.log('messages:', messages)
    //             } catch (err) {
    //                 console.log('Cannot load messages', err)
    //                 throw err
    //             }
    //         }
    //         fetchData()
    //     }
    //     , [])
    return (
        <div className='flex flex-col w-full h-full p-8'>
            <ProductsSearch setFilterBy={setFilterBy} filterBy={filterBy} />
            <Typography variant='h6' className='mb-6'>Home Page</Typography>
            <ProductsGrid products={filterProdacts(data, filterBy)} />
        </div>
    )
}
