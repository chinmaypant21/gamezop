import { redirect } from 'next/navigation'

import { Suspense } from 'react';
import { fetchGames } from '@/lib/api';
import { categories } from "@/data/categories";
import Loading from '@/components/Loading/Loading';
import Container from '@/components/Container/Container';
import GameCard from '@/components/GameCard/GameCard';

import styles from './Category.module.css';

interface Params {
    params: {
        category: string
    }
}

async function CategoryPage({ category }: any) {
    console.log('[+] Fetched in Category Page')
    const games = await fetchGames();

    const selectedCategory = categories.find(cat => cat.id === category)

    if (!selectedCategory) {
        redirect('/')
    }

    const filteredGames = games.filter(game => (
        game.categories.en.includes(selectedCategory?.value) ||
        game.tags.en.includes(selectedCategory?.value)
    ))

    return (
        <main className="flex flex-col items-center justify-between py-4 page-wrapper">
            <Container className='flex flex-col gap-3'>
                <div className="text-2xl text-primary capitalize font-bold">{selectedCategory.name}</div>
                {
                    filteredGames.length ? (
                        <div className={styles.gameContainer}>
                            {
                                filteredGames.map(game => (
                                    <GameCard key={game.code} data={game} />
                                ))
                            }
                        </div>
                    )
                        : <div className='text-dim text-2xl font-bold w-full text-center'>No Games to Show</div>
                }
            </Container>
        </main>
    );
}

export default function Page({ params }: Params){
    return (
        <Suspense fallback={<Loading />}>
            <CategoryPage category={params.category} />
        </Suspense>
    )
}