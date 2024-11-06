import React, { useState } from 'react'
import { useLocalStorage } from '@rehooks/local-storage';
import { useParams } from 'react-router-dom';


export function DetailsPage() {
    const { id } = useParams()
    const [product, setProduct] = useState(getById(id))

    function getById(_id) {
        const [products] = useLocalStorage('data')
        return products.find((product) => String(product.id) === _id)
    }

    return (
        <div className='flex-col justify-items-center' >
            <div>{product.title}</div>
            <img src={product.image.url} />
            <div>{product.price}</div>
            <div>{product.desc}</div>
        </div>
    )
}
