import React from 'react';
import { ProductCard } from "../../../components/ProductCard.jsx";

export const ProductsGrid = ({ products }) => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
