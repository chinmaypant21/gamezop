import Container from '@/components/Container/Container';
import { fetchGames } from '@/lib/api';

//Styles
import styles from '@/assets/page.module.css'

export default async function Home() {
  console.log('[+] Fetch in Home')
  const games = await fetchGames();

  return (
    <main className={`flex flex-col items-center justify-between py-4 ${styles.page_wrapper}`}>
      <Container className='flex flex-col gap-3'>
        <div className="text-2xl text-primary capitalize font-bold">HOME PAGE</div>
        {/* <GameSection games={games.slice(0,30)}/> */}
      </Container>
    </main>
  );
}