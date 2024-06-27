'use client'

import { useEffect, useMemo, useState } from "react";
import { redirect, useParams } from "next/navigation";

import { categories } from "@/data/categories";
import Container from "@/components/Container/Container";
import GameCard from "@/components/Cards/GameCard/GameCard";

import styles from '@/assets/game.module.css';


export default function CategoryGames({ games }: any) {
    const { category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState<any>();

    useEffect(() => {
        const selected = categories.find((cat) => cat.id === category);

        if(!selected){
            redirect('/')
        }

        else{
            setSelectedCategory(selected)
        }
    },[category])


    const filteredGames = useMemo(() => (
        games.filter((game: any) => (
            game.categories.en.includes(selectedCategory?.value) ||
            game.tags.en.includes(selectedCategory?.value))
        )
    ), [games]);

    return (
        <Container className='flex flex-col gap-3'>
            <div className="text-2xl text-primary capitalize font-bold">{selectedCategory?.name}</div>
            <div className={styles.gameContainer}>
                {
                    filteredGames ?
                        games.map((game: any) => (
                            <GameCard key={game.code} data={game} />
                        ))

                        : <div>Loading</div>
                }
            </div>
        </Container>
    )
}