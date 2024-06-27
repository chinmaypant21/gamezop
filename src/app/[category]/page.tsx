import { Suspense, lazy } from 'react';
import Loading from '@/components/Loading/Loading';

const CategoryGames = lazy(() => import('./_CategoryGames/CategoryGames'))

export default async function CategoryPage() {
    console.log('[+] Fetched in Category Page')
    const response = await fetch('https://pub.gamezop.com/v3/games?id=peSLSV', {
        next: {revalidate: 60} //Revalidate data every 60 seconds to prevent unnecessary API calls (ISR)
    });

    const { games } = await response.json();

    return (
        <main className="flex flex-col items-center justify-between py-4 page-wrapper">
            <Suspense fallback={<Loading />}>
                <CategoryGames games={games} />
            </Suspense>
        </main>
    );
}