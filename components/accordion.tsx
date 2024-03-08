import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { useEffect, useState } from "react";


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
   
  export function AccordionDemo() {
    const [data, setData] = useState<Game[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/games')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Erreur:', error));
    }, []);


    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Date de sortie</AccordionTrigger>
          <AccordionContent>
            

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Production</AccordionTrigger>
          <AccordionContent>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Genre</AccordionTrigger>
          <AccordionContent>
            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }