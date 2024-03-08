import React from 'react';
import Link from 'next/link';  

export default function HeaderNavigation() {
    return(
        <div className='w-96 h-14 rounded-3xl bg-black bg-opacity-35  flex items-center gap-5 justify-center'>
            <Link href='/' className='text-white'>
                Home
            </Link>
            <Link href='/pcwindows' className='text-white'>
                Pc Windows
            </Link>
            <Link href='/browser' className='text-white'>
                Browser
            </Link>
            <Link href='/contact' className='text-white'>
                Contact
            </Link>

        </div>
    )
}