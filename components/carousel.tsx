import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";``
import { useDispatch , useSelector} from 'react-redux';
import { addFavorite , removeFavorite } from '../redux/Slice/favoritesSlice';
import {Button} from "@/components/ui/button";
import { Star } from 'lucide-react';


import { RootState } from '../redux/store'; 

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Game = {
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
};

export default function CarouselSpacing() {
  const [data, setData] = useState<Game[]>([]);
  const dispatch = useDispatch();

  const { loggedIn } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    fetch("http://localhost:3000/api/games")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return (
    <div className="flex justify-center w-5/6 h-72">
      <Carousel className=" w-full  h-[300px]">
        <CarouselContent className="-ml-1">
          {data.slice(0, 5).map((game, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="w-full flex justify-center">
                <Card className="bg-zinc-700 border-zinc-700 h-[500px] w-[350px]">
                  <CardContent className="flex-col aspect-square items-center justify-center p-6">
                    <Image
                      src={game.thumbnail} 
                      alt={game.title} 
                      width={200}
                      height={200}
                      className="h-[240px] w-[360px]"
                    />
                    <div className="flex flex-col py-3 gap-3 text-slate-300 h-44">
                      <span className="text-2xl font-semibold text-white">
                        {game.title}
                      </span>
                      <span>{game.short_description}</span>
                    </div>
                    <div className="flex justify-between items-center w-full h-10 text-slate-300">
                      <span className="text-white">17.99$</span>
                      <div className="flex justify-end ">
                    {loggedIn && <Button className='bg-zinc-600 text-orange-500 hover:text-gray-800' onClick={() => dispatch(addFavorite(game))}><Star/></Button>}
                    </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-zinc-600 text-orange-600 border-orange-600" />
        <CarouselNext className="bg-zinc-600 text-orange-600 border-orange-600" />
      </Carousel>
    </div>
  );
}
