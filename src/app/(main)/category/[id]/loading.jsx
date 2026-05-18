import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-[80vh] items-center justify-center gap-2'>
             <h2 className='font-bold'>News by category Loading</h2>
            <span className="loading loading-spinner text-secondary"></span>

        </div>
    );
};

export default Loading;