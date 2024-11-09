import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchProductById } from "../../api/Products/Products.api.hooks.js"
import { AppSpinner } from "../../components/AppSpinner.jsx"
import { ProductCard } from "../../components/ProductCard.jsx"


export function DetailsPage() {
    const { id } = useParams()
    const { data, isLoading } = useFetchProductById(id)
    console.log({ data })
    if (isLoading) {
        return <AppSpinner />
    }

    const [product] = data

    return (
        <div className='flex items-center justify-center pt-10'>
            <div className='sm:max-w-[40%]'>
                <ProductCard product={product} viewMode />
            </div>
        </div>
    )
}
