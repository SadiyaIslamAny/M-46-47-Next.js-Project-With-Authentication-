import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-4'>
            <h2 className='text-purple-600 font-bold text-4xl '>this page is not found</h2>
            <Link href={'/'}><button className='btn bg-purple-500 text-white'>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;