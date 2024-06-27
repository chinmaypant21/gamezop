import Link from 'next/link';
import Image from 'next/image';

import NavCategory from './NavCategory';
import Searchbar from '@/components/Searchbar/Searchbar';
import styles from './Navbar.module.css'

export default function Navbar() {

  return (
    <header className='text-primary' id={styles.header}>
      <nav className={styles.nav_container}>
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
        <Searchbar />
      </nav>
    </header>
  );
};