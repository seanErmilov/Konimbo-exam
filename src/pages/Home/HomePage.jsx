import React, { useState } from 'react'
import { ProductsGrid } from "./components/ProductsGrid.jsx"
import { AppSpinner } from "../../components/AppSpinner.jsx"
import { ProductsSearch } from './components/ProductsSearch.jsx'
import { useFetchProducts, useFetchProductsSimple } from "../../api/Products/Products.api.hooks.js";
import { useEffect } from 'react'
import { filterProdacts } from './HomePage.utils.js'
import { Header } from '../../components/Header.jsx';

export function HomePage() {

    const [filterBy, setFilterBy] = useState({ title: '' })
    const [simpleData, setSimpleData] = useState(null)
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
        <>
            <Header setFilterBy={setFilterBy} filterBy={filterBy} />
            <div className='flex flex-col items-center w-full h-full p-8'>
                <ProductsGrid products={filterProdacts(data, filterBy)} />
            </div>
        </>
    )
}
