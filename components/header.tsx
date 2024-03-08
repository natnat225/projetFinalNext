import React from 'react';
import Link from 'next/link';
import HeaderNavigation from './header-navigation';
import Button from './button';
import LogoNav from '../public/OIG3-removebg-preview.png';
import Image from 'next/image'
import CartButton from './CartButton';
import ResponsiveMenu from './responsive-menu';
import { useState } from 'react';
import { Search , XCircle} from 'lucide-react';




export default function Navbar() {

    const [rechercheOuverte, setRechercheOuverte] = useState(false);

    const ouvrirRecherche = () => {
      setRechercheOuverte(true);
    };
  
    const fermerRecherche = () => {
      setRechercheOuverte(false);
    };

    return(
        <div className='flex w-screen h-32 bg-black  items-center justify-between pe-10  md:justify-around md:w-screen absolute bg-opacity-40'>
            <div className='flex items-center ps-10 '>
                <ResponsiveMenu />
            </div>
           
            <div className='Logo w-28 flex hidden md:block '>
                <Image src={LogoNav} alt='Logo'
                    className='size-28' />
             
            </div>
            
            <div className='hidden md:flex ' >
                <div >
                <div className='flex '>
      <button onClick={ouvrirRecherche} className=" size-16 bg-zinc-500 text-orange-200 bg-opacity-40 rounded-full items-center justify-center flex relative left-7 bottom-1 "> <Search className='text-orange-400'/> </button>

      {rechercheOuverte ? (
        <div className='flex items-center'>
          <input type="text" placeholder="PcBrowser,Windows,ect.." className='h-8 w-64 relative left-7 rounded-md bg-zinc-400 text-white placeholder-zinc-200 border-orange-400 border px-2'/>
          <button onClick={fermerRecherche} className='relative left-8'> <XCircle className='text-orange-400'/> </button>
                    </div>
                             ) : (
                            <div>
                                <HeaderNavigation />
          
                    </div>
                        )}
                    </div>
                </div>
                
            </div>
            <div className=''>
                <CartButton />
            </div>
            


        </div>
    )
}