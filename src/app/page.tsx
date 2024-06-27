import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/Container/Container';
import GameSwiper from '@/components/Swiper/GameSwiper';
import { getGamesByCategory } from '@/lib/categorize_games';
import { fetchGames } from '@/lib/api';

import NextIcon from '@icons/next.svg'

const categoryList = ['featured-games','action-games','adventure-games','strategy-games']

export default async function Home() {
  console.log('[+] Fetch in Home')
  const games = await fetchGames();

  const categorized_games: any = getGamesByCategory(games, categoryList, 20);

  return (
    <main className={`flex flex-col gap-6 items-center justify-between py-4 page-wrapper`}>
    {
      categorized_games.map((category: any) => (
        <Container key={category.id} className='flex flex-col gap-3 w-full'>
          <div className='flex justify-between'>
            <div className="text-2xl text-primary capitalize font-bold">{category.name}</div>
            <Link href={`/${category.id}`} className='flex items-center gap-2'>
              <span className='text-primary text-md font-bold'>View More</span>
              <Image alt='Next' src={NextIcon} height={25} width={25} />
            </Link>
          </div>
          <GameSwiper games={category.games} />
        </Container>
      ))
    }
    </main>
  );
}