"use client"

import { useParams } from 'next/navigation';
import NavItem from './NavItem';
import '@/assets/header.css'
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Action',
    id: 'action-games'
  },
  {
    name: 'Adventure',
    id: 'adventure-games'
  },
  {
    name: 'Arcade',
    id: 'arcade-games'
  },
  {
    name: 'Puzzle & Logic',
    id: 'puzle-and-logic-games'
  },
  {
    name: 'Strategy',
    id: 'strategy-games'
  }
]

export default function Navbar() {
  const { category: selected_category } = useParams();

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
        <ul id='category_container'>
          {
            categories.map((category: any) => (
              <NavItem
                key={category.id}
                category={category}
                isActive={category.id === selected_category} 
              />
            ))
          }
        </ul>
      </div>
    </header>
  );
};