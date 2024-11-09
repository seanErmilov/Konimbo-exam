import React, { useState } from 'react'
import { ProductsGrid } from "./components/ProductsGrid.jsx"
import { AppSpinner } from "../../components/AppSpinner.jsx"
import { useFetchProducts } from "../../api/Products/Products.api.hooks.js"
import { filterProdacts } from './HomePage.utils.js'
import { Header } from '../../components/Header.jsx'

export function HomePage() {

    const [filterBy, setFilterBy] = useState({ title: '' })
    const { data, isLoading } = useFetchProducts()

    if (isLoading) {
        return <AppSpinner />
    }

    return (
        <>
            <Header setFilterBy={setFilterBy} filterBy={filterBy} />
            <div className='flex flex-col items-center w-full h-full p-8'>
                <ProductsGrid products={filterProdacts(data, filterBy)} />
            </div>
        </>
    )
}
