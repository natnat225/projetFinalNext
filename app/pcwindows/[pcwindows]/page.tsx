"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from 'lucide-react';
import Header from '../../../components/header';
import { Button } from "@/components/ui/button"
import { useDispatch , useSelector} from 'react-redux';
import { addFavorite , removeFavorite } from '../../../redux/Slice/favoritesSlice';
import { RootState } from '../../../redux/store'; 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

type GameDetailsProps = {
  game: Game;
};

export default function GameDetails({
  params,
}: {
  params: { pcwindows: string };
}) {
  const [data, setData] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { loggedIn } = useSelector((state: RootState) => state.auth);



  useEffect(() => {
    fetch("http://localhost:3000/api/games")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(true);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="fixed">
        <Header />  
      </div>

    <div className="w-full bg-zinc-800 h-screen flex flex-col items-center justify-center px-16">
      
      
      <div className="border border-orange-500 rounded-lg bg-zinc-700 h-1/2">
        {loading ? (
          <div>
            {data
              .filter((item) => item.id === parseInt(params.pcwindows))
              .map((game) => (
                <div key={game.id} className="flex">
                  <div className="w-1/2 h-96 items-center justify-center flex ">
                    <Image
                      src={game.thumbnail}
                      alt={game.title}
                      width={250}
                      height={200}
                      className="h-2/3 w-2/3 rounded-md"
                      />
                  </div>
                  <div className="w-1/2 h-96 py-12">
                    <h1 className="text-slate-300 text-3xl relative bottom-4">{game.title}</h1>
                    <p className="text-slate-300 pe-3">
                      {game.short_description}
                    </p>
              

                    <div>
                      <Accordion type="single" collapsible className="w-2/3">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-slate-300 hover:text-orange-500">
                            Date de sortie
                          </AccordionTrigger>
                          <AccordionContent className="text-slate-300">
                            {game.release_date}
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-slate-300 hover:text-orange-500">
                            Production
                          </AccordionTrigger>
                          <AccordionContent className="text-slate-300">
                            <p>{game.publisher}</p>
                            <p>{game.developer}</p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-slate-300 hover:text-orange-500">
                            Genre
                          </AccordionTrigger>
                          <AccordionContent className="text-slate-300">
                            <p>- {game.genre}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="flex justify-end px-6 ">
                    {loggedIn && <Button className='bg-zinc-600 text-orange-500 hover:text-gray-800' onClick={() => dispatch(addFavorite(game))}><Star/></Button>}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div>Loading...</div>
          )}
      </div>
    </div>
          </div>
  );
}
