'use client'

import { useMemo } from "react";
import { redirect, useParams } from "next/navigation";

import { categories } from "@/data/categories";
import Container from "@/components/Container/Container";
import GameCard from "@/components/GameCard/GameCard";

// Styles
import styles from './Games.module.css';

interface Props{
    games: Game[];
}


export default function CategoryGames({ games }: Props) {
    const { category } = useParams();

    const selectedCategory = useMemo(() => {
        return categories.find(cat => cat.id === category);
    },[category])

    if(!selectedCategory){
        redirect('/')
    }

    const filteredGames = useMemo(() => {
        return games.filter(game => (
            game.categories.en.includes(selectedCategory?.value) ||
            game.tags.en.includes(selectedCategory?.value)
        ))
    },[selectedCategory,games])

    return (
        <Container className='flex flex-col gap-3'>
            <div className="text-2xl text-primary capitalize font-bold">{selectedCategory.name}</div>
            <div className={styles.gameContainer}>
                {
                    filteredGames.length ?
                        filteredGames.map((game: any) => (
                            <GameCard key={game.code} data={game} />
                        ))

                        : <div>Loading</div>
                }
            </div>
        </Container>
    )
}