'use client' ;

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../../components/header';
import { Trash2 } from 'lucide-react';
import { removeFavorite } from '../../redux/Slice/favoritesSlice';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store'; 

interface Game {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}

export default function FavoritesPage() {
    const favorites = useSelector((state: { favorites: Game[] }) => state.favorites);



    const [data, setData] = useState<Game[]>([]);
    const dispatch = useDispatch();
    const { loggedIn } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        fetch("http://localhost:3000/api/games")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }, []);

    return (
        <div className='w-auto min-h-screen flex  bg-zinc-800'>
            <Header />
            {loggedIn ? (
        <div className='w-full h-full relative top-32 flex justify-center items-center bg-zinc-800 '>
            
            
                <div className='flex h-full rounded-lg gap-3 w-full  flex-col p-4'>

            {data
                .filter((game) => favorites.some((favorite) => favorite.id === game.id))
                .map((game) => (
                    <div key={game.id} className='flex justify-center items-center'>
                        <div className=" h-64  flex  ps-3 border w-[400px] md:w-[600px] lg:w-[800px]  rounded-lg pt-5">
                            <div>
                                <Image
                                src={game.thumbnail}
                                alt={game.title}
                                width={250}
                                height={200}
                                className="w-32 h-32 lg:w-72 lg:h-52 rounded-md flex"
                                />
                            </div>
                               <div className='w-4/5 h-52 flex justify-between flex-col  py-2 px-4'>
                                <div className='w- flex justify-between'>
                                    <h1 className="text-slate-300 text-md ">{game.title}</h1>
                                    <h1 className='text-slate-300 text-md '>{game.release_date}</h1>
                                </div>
                                <div className='h-52 flex items-end'>
                                    <button className='text-white border h-10 w-20 rounded-full items-center flex justify-center hover:bg-orange-500 hover:text-black' onClick={() => dispatch(removeFavorite(game.id))}> <Trash2/></button>
                                </div>
                                
                               </div>
                               
                        
                        </div>
                        
                    </div>
                ))}
                </div>
                </div>
         ) : (
            <div className='flex justify-center items-center px-96 left-6 text-xl text-white relative '> <p className='border h-12 flex items-center px-4 rounded-lg text-orange-500'>

            
            Vous devez vous connecter pour voir vos favoris</p></div>
            
            )}
                </div>
    );
}