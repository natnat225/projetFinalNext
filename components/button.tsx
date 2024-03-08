import React from 'react';
import { Search } from 'lucide-react';


export default function Button() {

    return (
        <div>
            <button className=" size-16 bg-zinc-500 text-orange-200 bg-opacity-40 rounded-full items-center justify-center flex">
                <Search className='text-orange-600'/>
            </button>

        </div>
    )
};