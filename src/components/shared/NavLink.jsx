"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    // console.log(pathname)
    const isActive = href === pathname
    return (
        <div>
            <Link href={href} className={`${isActive? "bg-pink-800 text-white rounded py-2 px-4": ""}`}>
               {children}
            </Link>
        </div>
    );
};

export default NavLink;