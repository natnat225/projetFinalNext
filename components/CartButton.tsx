
'use client';
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { User , UserPlus } from 'lucide-react';
import Modal from '../components/modal'; 
import RegisterModal from '../components/registerModal';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, /* removeFavorite */ } from '../redux/Slice/favoritesSlice';
import Link from 'next/link';

import { RootState } from '../redux/store'; 

export default function CartButton() {

    

    return (
        <div className='flex gap-3'>
            <Link href='/cart'>
                <button /* onMouseOver={handleCartOpen} */ className=" size-16  rounded-full items-center justify-center flex">
                    <ShoppingCart className='text-white hover:text-orange-500 size-9'/>
                </button>
            </Link>
            <Link href='/connect'>
                <button /* onMouseOver={handleRegisterOpen}  */className=" size-16  rounded-full items-center justify-center flex">
                    <UserPlus className='text-white hover:text-orange-500 size-9'/>
                </button>
            </Link>
            <Link href='/loginpage'>
                <button /* onMouseOver={handleRegisterOpen}  */className=" size-16  rounded-full items-center justify-center flex">
                    <User className='text-white hover:text-orange-500 size-9'/>
                </button>
            </Link>
            
        </div>
    )
}
   
