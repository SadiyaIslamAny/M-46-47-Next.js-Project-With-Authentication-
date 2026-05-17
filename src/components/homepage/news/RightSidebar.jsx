import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg'>Login With</h2>
            <div className='flex flex-col gap-2 mt-4'>
                <button className='btn border-blue-500 text-blue-500'>
                    <FaGoogle />Login With google
                </button>
                <button className='btn'>
                    <FaGithub />Login With github
                </button>
            </div>

        </div>
    );
};

export default RightSidebar;