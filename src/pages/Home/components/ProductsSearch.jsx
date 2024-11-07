import React from 'react';
import { Input } from "@material-tailwind/react";


export const ProductsSearch = ({ setFilterBy, filterBy }) => {
    function handleChange(event) {
        const { name, value } = event.target
        setFilterBy({ ...filterBy, [name]: value })
    }

    return (
        <div className="w-72 p-6">
            <Input onChange={handleChange} name='title' label="serach" />
        </div>
    )
}
