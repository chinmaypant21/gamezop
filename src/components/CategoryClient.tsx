'use client'

import { useMemo } from "react";
import { useParams } from "next/navigation";

import GameSection from "@/app/GameSection"
import { categories } from "@/data/categories";
import Container from "./Container"

export default function CategoryClient({ games }: any) {
    const { category } = useParams();

    const selected_category = useMemo(() => categories.find((cat) => (
        cat.id === category
    )), [category])

    const filteredGames = useMemo(() => (
        games.filter((game: any) => (
            game.categories.en.includes(selected_category?.value) ||
            game.tags.en.includes(selected_category?.value))
        )
    ), [games]);

    return (
        <Container className='flex flex-col gap-3'>
            <div className="text-2xl text-primary capitalize font-bold">{selected_category?.name}</div>
            <GameSection games={filteredGames} />
        </Container>
    )
}