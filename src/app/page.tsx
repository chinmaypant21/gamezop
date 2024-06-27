import Container from '@/components/Container'
import styles from '@/assets/page.module.css'
import GameSection from '@/components/GameSection';

export default async function Home() {
  const response = await fetch('https://pub.gamezop.com/v3/games?id=peSLSV');
  const { games } = await response.json();

  return (
    <main className={`flex flex-col items-center justify-between py-4 ${styles.page_wrapper}`}>
      <Container className='flex flex-col gap-3'>
        <div className="text-2xl text-primary capitalize font-bold">Action</div>
        <GameSection games={games.slice(0,30)}/>
      </Container>
    </main>
  );
}