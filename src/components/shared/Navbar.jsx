import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-500 font-medium gap-5'>
                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/about-us"}>About</NavLink>
                </li>
                <li>
                    <NavLink href={"/career"}>Career</NavLink>
                </li>

            </ul>

            <div className='flex items-center gap-3'>
                <Image
                  src={userAvatar}
                  alt="User Avatar"
                  width={45}
                  height={45}
                />
                <button className='btn bg-pink-800 text-white'>
                    <Link href={"/login"}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;