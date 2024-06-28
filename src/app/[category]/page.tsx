import { redirect } from 'next/navigation'

import Container from '@/components/Container/Container';
import GameCard from '@/components/GameCard/GameCard';
import { categories } from "@/data/categories";

import styles from './Category.module.css';

interface Params {
    params: {
        category: string
    }
}

export default async function CategoryPage({ params }: Params) {
    console.log('[+] Fetched in Category Page')
    const response = await fetch('https://pub.gamezop.com/v3/games?id=peSLSV', {
        next: { revalidate: 60 } //Revalidate data every 60 seconds to prevent unnecessary API calls (ISR)
    });

    const { games }: { games: Game[] } = await response.json();
    const selectedCategory = categories.find(cat => cat.id === params.category)

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