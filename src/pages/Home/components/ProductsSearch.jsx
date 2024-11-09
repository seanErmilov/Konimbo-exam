import React from 'react'
import { Input } from "@material-tailwind/react"


export const ProductsSearch = ({ setFilterBy, filterBy }) => {
    function handleChange(event) {
        const { name, value } = event.target
        setFilterBy({ ...filterBy, [name]: value })
    }

    return (
        <Input onChange={handleChange} name='title' label="serach" />
    )
}
