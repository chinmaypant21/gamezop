import { GetServerSideProps } from "next";
import GameSection from "./GameSection";
import Container from "./container";
import styles from '@/assets/page.module.css'

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