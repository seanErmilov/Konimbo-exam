import React from 'react';
import {Spinner} from "@material-tailwind/react";

export const AppSpinner = () => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <Spinner color='blue'/>
        </div>
    );
};
