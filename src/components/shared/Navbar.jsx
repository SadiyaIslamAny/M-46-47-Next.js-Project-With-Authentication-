"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    console.log(user, isPending)
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
                {isPending ? (<span className="loading loading-spinner loading-lg"></span>):
                    user ? (
                        <>
                            <h2>Hello, {user?.name}</h2>

                            <div className='w-[50px] h-[50px] relative'>
                                <Image
                                    src={user?.image || userAvatar}
                                    alt="User Avatar"
                                    fill
                                    className='rounded-full object-cover'
                                />
                            </div>

                            <button className='btn bg-pink-800 text-white' onClick= {async() => await authClient.signOut()}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <button className='btn bg-pink-800 text-white'>
                            <Link href="/login">Login</Link>
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;