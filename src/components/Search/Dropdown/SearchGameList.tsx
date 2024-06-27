import Image from 'next/image'
import Link from 'next/link'

import RatingIcon from '@icons/star.png'
import styles from '../Search.module.css'

interface Props {
    data: Game[]
}

export default function SearchGameList({ data }: Props) {
    if(!data.length) {
        return (
            <div className='flex justify-center items-center h-20 text-sm text-dim'>No search results</div>
        )
    }


    else return (
        <ul className={styles.result_game_list}>
            {
                data.map((game) => (
                    <li key={game.code} className={styles.search_list_item}>
                        <Link href={game.url} className='flex gap-4'>
                            <Image alt='Game thumbnail' width={50} height={50} src={game.assets.thumb} />
                            <div className='flex flex-col justify-evenly'>
                                <span className='font-bold text-md'>{game.name.en}</span>
                                <span className='text-xs'>{game.categories.en[0] ? `in ${game.categories.en[0]}` : ''}</span>
                            </div>
                            <div className='flex flex-col gap-1 justify-center items-center ml-auto mr-2'>
                                <Image src={RatingIcon} alt='Rating' height={25} width={25} />
                                <span className='text-xs'>{Number(game.rating).toFixed(1)}/5</span>
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}