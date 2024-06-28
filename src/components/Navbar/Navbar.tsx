import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

import Search from '@/components/Search/Search';
import NavCategory from './Category/NavCategory';

import styles from './Navbar.module.css'

export default function Navbar() {

  return (
    <header className='text-primary' id={styles.header}>
      <nav className={styles.nav_container}>
        <div className={styles.logo_container}>
          <Link href={'/'} className='w-full'>
            <Image
              alt='logo'
              src={'https://static.gamezop.com/logo/gamezop-logo-dark.png'}
              height={0}
              width={140}
            />
          </Link>
        </div>
        <NavCategory />
        <Suspense>
          <Search />
        </Suspense>
      </nav>
    </header>
  );
};