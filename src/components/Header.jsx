import React, { useState } from 'react'
import { ProductsSearch } from '../pages/Home/components/ProductsSearch'


export function Header({ setFilterBy, filterBy }) {

    return (
        <header className="border-b bg-white font-sans min-h-[60px] px-8 py-3 relative tracking-wide z-50">
            <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4 gap-x-60">
                <a href="#" className='pb-3 lg:pb-0'>
                    <img src="src/assets/logo.jpg" alt="logo" className="w-32" />
                </a>

                <div className='lg:w-96 '>
                    <ProductsSearch setFilterBy={setFilterBy} filterBy={filterBy} />
                </div>
            </div>
        </header>
    )
}
