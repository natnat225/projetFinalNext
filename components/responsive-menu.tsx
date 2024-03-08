import { Sheet, SheetTrigger, SheetContent} from './ui/sheet'; 
import { Menu , User , ShoppingCart} from 'lucide-react';
import Link from 'next/link';
import CartButton from './CartButton';




export default function ResponsiveMenu () {

    return(
        <div>
            <Sheet>
                <SheetTrigger>
                    <Menu className='text-white size-6 md:hidden'/>
                </SheetTrigger>
                <SheetContent
                className='bg-zinc-800 text-white'
                side="left"
                >
                    <div className='flex flex-col gap-28 '>

                    <div className='flex flex-col gap-10 mt-24 items-center text-xl '>
                        <Link href='/' className='hover:text-orange-500'>
                            Home
                        </Link>
                        <Link href='/pcwindows' className='hover:text-orange-500'>
                            Pc Windows
                        </Link>
                        <Link href='/browser' className='hover:text-orange-500'>
                            Browser
                        </Link>
                        <Link href='/nintendo' className='hover:text-orange-500'>
                            Contact
                        </Link>
                    </div>
                    <div className='flex text-white'>
                        <button className=" size-12  text-white rounded-full items-center justify-center flex">
                            <ShoppingCart className='text-white hover:text-orange-500'/>
                         </button>
                        <button className=" size-12  rounded-full items-center justify-center flex">
                            <User className='text-white hover:text-orange-500'/>
                        </button>
                        

                    </div>
                    </div>
                 


                </SheetContent>
            </Sheet>


        </div>
    )
}