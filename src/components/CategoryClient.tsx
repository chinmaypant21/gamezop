'use client'

import GameSection from "@/app/GameSection"
import Container from "./Container"
import { useParams } from "next/navigation";

const categories = [
    {
        name: 'Action',
        id: 'action-games'
    },
    {
        name: 'Adventure',
        id: 'adventure-games'
    },
    {
        name: 'Arcade',
        id: 'arcade-games'
    },
    {
        name: 'Puzzle & Logic',
        id: 'puzle-and-logic-games'
    },
    {
        name: 'Strategy',
        id: 'strategy-games'
    }
]

export default function CategoryClient({ games }: any) {
    const { category: selected_category } = useParams();
    const category = categories.find((cat) => cat.id === selected_category);

    const filteredGames = games.filter((game: any) =>
        game.categories.en.includes(category?.name ?? '')
    );


    return (
        <Container className='flex flex-col gap-3'>
            <div className="text-2xl text-primary capitalize font-bold">{category?.name}</div>
            <GameSection games={filteredGames} />
        </Container>
    )
}
