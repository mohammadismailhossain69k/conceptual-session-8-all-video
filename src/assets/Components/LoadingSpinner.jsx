import React from 'react';
import { PacmanLoader } from 'react-spinners';


const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center  min-h-[calc(100vh-285px)] text-primary'>
        <PacmanLoader/>
        </div>
    );
};

export default LoadingSpinner;