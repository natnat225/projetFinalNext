import {useState, useEffect} from 'react'
import * as React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
    
}

 
export default function CardWithForm() {

    const [data, setData] = useState<Game[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/games')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Erreur:', error));
    }, []);
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <div>
                {data.slice(0, 9).map((game: Game) => (
                <div key={game.id}>
                    <Image src={game.thumbnail} width={200} height={200} alt={game.title} />
                 </div>
                 ))}
             </div>
                
            </div>
            <div className="flex flex-col space-y-1.5">
            
    
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}


