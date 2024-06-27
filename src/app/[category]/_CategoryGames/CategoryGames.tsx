'use client'

import { useEffect, useMemo } from "react";
import { redirect, useParams } from "next/navigation";

import { categories } from "@/data/categories";
import Container from "@/components/Container/Container";
import GameCard from "@/components/Cards/GameCard/GameCard";

import styles from '@/assets/game.module.css';


export default function CategoryGames({ games }: any) {
    const { category } = useParams();

    const selectedCategory = useMemo(() => {
        return categories.find((cat) => cat.id === category);
    },[category])

    if(!selectedCategory){
        redirect('/')
    }

    const filteredGames = useMemo(() => {
        return games.filter((game: any) => (
            game.categories.en.includes(selectedCategory?.value) ||
            game.tags.en.includes(selectedCategory?.value)
        ))
    },[selectedCategory,games])

    return (
        <Container className='flex flex-col gap-3'>
            <div className="text-2xl text-primary capitalize font-bold">{selectedCategory?.name}</div>
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