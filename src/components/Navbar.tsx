import Link from 'next/link';
import Image from 'next/image';
import Searchbar from './Searchbar';

import '@/assets/header.css'
import NavCategory from './NavCategory';
import { SearchGames } from './SearchGames';

export default function Navbar() {

  return (
    <header className='text-primary' id='header'>
      <div className='nav-container'>
        <div className='mr-6'>
          <Link href={'/'} className='h-full w-full'>
            <Image 
              alt='logo'
              src={'https://static.gamezop.com/logo/gamezop-logo-dark.png'}
              height={0} width={140}
            />
          </Link>
        </div>
        <NavCategory />
        <SearchGames />
      </div>
    </header>
  );
};