'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react';
import Header from '../../components/header';
import Link from 'next/link';


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



export default function Page() {
  const [data, setData] = useState<Game[]>([]);
  const [publishers, setPublishers] = useState<string[]>([]);
  const [selectedPublisher, setSelectedPublisher] = useState<string>('');
  const [releaseSortOrder, setReleaseSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:3000/api/games')
      .then(response => response.json())
      .then(data => {
        const uniquePublishers = Array.from(new Set<string>(data.map((game: Game) => game.publisher)));
        setPublishers(uniquePublishers);
        let filteredData = data;
        if (selectedPublisher) {
          filteredData = filteredData.filter((game: Game) => game.publisher === selectedPublisher);
        }
        if (releaseSortOrder === 'asc') {
          filteredData.sort((a: Game, b: Game) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
        } else if (releaseSortOrder === 'desc') {
          filteredData.sort((a: Game, b: Game) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        }
        if (searchTerm) {
          filteredData = filteredData.filter((game: Game) => game.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        setData(filteredData);
      });
  }, [selectedPublisher, releaseSortOrder, searchTerm]);
  useEffect(() => {
    if (selectedPublisher) {
      const sortedData = [...data].filter((game: Game) => game.publisher === selectedPublisher);
      setData(sortedData);
    }
  }, [selectedPublisher ,data]);

  return (
    <div className='bg-zinc-800'>
      <div className='fixed'>
        <Header/> 
      </div>
      <div className='pt-32 flex justify-between'>
      <input type="text" placeholder="Rechercher par titre" onChange={(e) => setSearchTerm(e.target.value)} className='placeholder-orange-500 text-orange-500 bg-zinc-600 border-2 border-orange-500 h-8 rounded-lg outline-none' />
        <select onChange={(e) => setSelectedPublisher(e.target.value)} className='text-orange-500 bg-zinc-600 border-2 border-orange-500 h-8 rounded-lg outline-none'>
        <option value="">Trier par editeur</option>
        {publishers.map((publisher, index) => (
          <option key={index} value={publisher}>{publisher}</option>
        ))}
      </select>
      <select onChange={(e) => setReleaseSortOrder(e.target.value)} className='text-orange-500 bg-zinc-600 border-2 border-orange-500 h-8 rounded-lg outline-none'>
        <option value="">Trier par date de sortie</option>
        <option value="asc">Ascendant</option>
        <option value="desc">Descendant</option>
      </select>
      </div>

    <div className='grid grid-cols-1 gap-5 rounded-md bg-zinc-800 px-16 py-32 md:grid-cols-2 lg:grid-cols-3'>
      {data
        .filter(game => game.platform === "PC (Windows)")
        .slice(0, 21)
        .map((game: Game) => (
          
          <div className='w-[320px] h-[250px] flex flex-col justify-center ' key={game.id}>
            <div>
            <Image src={game.thumbnail} width={400} height={200} alt={game.title} className='w-[500px] h-[200px] rounded-md '/>
            </div>
            <div className='flex justify-between h-6 justify-center pt-2'>
              <p className='text-slate-200'>{game.title}</p>
              <Link href={`/pcwindows/${game.id}`}>
              <Button className='bg-zinc-600 text-orange-500 hover:text-gray-800'><ShoppingCart/></Button>
              </Link>
            </div>
          </div>
        ))}
    </div>
        </div>
  )
}