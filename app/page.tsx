'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from '../components/carousel'
import ImageSection from '../public/helldiversBg.webp'
import Header from '../components/header'
import {ChevronRight} from 'lucide-react';
import Footer from '../components/footer';



import * as React from "react"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface Game {
  id: number;
  title: string;
  src: string;
  thumbnail: string;
  alt: string;
  platform: string;
}

export default function Home() {
  const [data, setData] = useState<Game[]>([]);


  useEffect(() => {
      fetch('http://localhost:3000/api/games')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur:', error));
  }, []);
  
  return (
    <main className="w-screen bg-zinc-800">
      <div className="fixed z-40 ">
        <Header/>
        
      </div>
      <div className="imageSection  z-30 ">
        <Image src={ImageSection} width={600} height={600} alt="ImageSection" className="md:w-full md:h-[650px] shadow-lg min-w-full h-[600px] opacity-70"/>
      </div>
      <h1 className="px-6 text-white py-16 text-4xl flex items-center gap-3 hover:text-orange-500 hover:ease-in-out duration-200">Meilleurs Ventes <span className="text-white"> <ChevronRight className="size-10 hover:text-orange-500"/> </span> </h1>
      <div className="bg-zinc-800 h-[550px] flex justify-center w-auto ">
        <Carousel/>
      </div>
      
      <div >
        <p className="flex px-6 text-4xl  text-white items-center hover:text-orange-500 hover:ease-in-out duration-200">Tendance <span className="text-white"> <ChevronRight className="size-10 hover:text-orange-500"/> </span></p>
      </div>
      <div className="h-auto w-screen bg-zinc-800 grid grid-cols-1  flex-col px-5 gap-5 py-10 lg:grid-cols-3 md:grid-cols-2 ">
      {data.slice(0, 6).map((game: Game) => (
                <div className="w-[400px] h-[300px] shadow-xl border border-zinc-800 bg-zinc-800 flex-col" key={game.id}>
                 
                   {/*  <CardContent className="h-[250px]"> */}
                        <Image src={game.thumbnail} width={500} height={500} alt={game.title} className="w-[450px] h-[250px] hover:scale-110 hover:ease-in-out duration-300 rounded-lg"/>
                   {/*  </CardContent> */}
               {/*      <CardFooter className="flex justify-between">
                        <p> {game.platform}</p>
                        <Button>Deploy</Button>
                    </CardFooter> */}
                    <div className="flex justify-between h-10 items-center">
                    <p className="text-white">{game.title}</p>
                    <p className="text-white">{game.platform}</p>
                    </div>
                </div>
            ))}
            <div>

            </div>
      </div>
    <Footer/>
    </main>
      
     
  );
};