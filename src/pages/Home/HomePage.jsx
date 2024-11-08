import React, { useState } from 'react'
import { Typography } from "@material-tailwind/react"
import { ProductsGrid } from "./components/ProductsGrid.jsx"
import { AppSpinner } from "../../components/AppSpinner.jsx"
import { ProductsSearch } from './components/ProductsSearch.jsx'
import { useFetchProducts, useFetchProductsSimple } from "../../api/Products/Products.api.hooks.js";
import { useEffect } from 'react'

export function HomePage() {

    const [filterBy, setFilterBy] = useState({ title: '' })
    const [simpleData, setSimpleData] = useState(null)

    function filterProdacts(products, filterBy) {
        return products.filter((product) => product.title.toLowerCase().includes(filterBy.title))
    }

    const { data, isLoading } = useFetchProducts()
    useEffect(() => {
        async function fetchSimpleData() {
            const data = await useFetchProductsSimple()
            setSimpleData(data)
        }
        fetchSimpleData()
    }, [])

    if (isLoading) {
        return <AppSpinner />
    }

    if (!simpleData) {
        return <AppSpinner />
    }

    return (
        <div className='flex flex-col items-center w-full h-full p-8'>

            <ProductsSearch setFilterBy={setFilterBy} filterBy={filterBy} />
            <ProductsGrid products={filterProdacts(data, filterBy)} />
        </div>
    )
}
