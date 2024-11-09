import React, { useState } from 'react'
import { ProductsSearch } from '../pages/Home/components/ProductsSearch'


export function Header({ setFilterBy, filterBy }) {

    return (
        <header className="border-b bg-white font-sans min-h-[60px] px-8 py-3 relative tracking-wide z-50">
            <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4 gap-x-4 justify-center lg:justify-between">
                <a href="#" className='pb-3 lg:pb-0'>
                    <img src="src/assets/logo.jpg" alt="logo" className="w-32" />
                </a>

                <div className='lg:w-96'>
                    <ProductsSearch setFilterBy={setFilterBy} filterBy={filterBy} />
                </div>
                {/* Menu Section */}
                <div className='lg:block hidden'>
                    <ul className="">
                        <li className="max-lg:border-b max-lg:py-3">
                            <a href="#" className="hover:text-[#007bff] text-[15px] text-[#007bff] block font-bold">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
