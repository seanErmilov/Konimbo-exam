import React from 'react';
import { useState } from 'react';
import { Input } from "@material-tailwind/react";


export const ProductsSearch = ({ setFilterBy, filterBy }) => {
    function handleChange(event) {
        const { name, value } = event.target
        setFilterBy({ ...filterBy, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const { name, value } = event.target
        setFilterBy({ ...filterBy, [name]: value })
    }

    return (
        <div className="w-72">
            <Input on onChange={handleChange} name='title' label="serach" />
        </div>
    )
}
