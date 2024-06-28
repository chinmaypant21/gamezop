import Link from "next/link";
import Image from "next/image";

import FavouriteBtn from "@/components/Buttons/FavouriteBtn/FavouriteBtn";
import InfoBtn from "@/components/Buttons/InfoBtn/InfoBtn";

import PlaceholderImg from '@/assets/images/blur.jpg'

import styles from './GameCard.module.css'

interface Props {
    data: Game,
    hideInfo?: boolean
}

export default function GameCard({ data, hideInfo }: Props) {
    return (
        <div className={styles.game_card}>
            <div className="relative">
                <FavouriteBtn />
                {
                    !hideInfo &&
                    <InfoBtn data={data} />
                }
                <Link target="_blank" href={data.url}>
                    <Image 
                        src={data.assets.square} 
                        alt="Game Image"
                        placeholder={'blur'}
                        blurDataURL={data.assets.coverTiny}
                        height={190} 
                        width={190} 
                        className="rounded-2xl w-full" 
                    />
                </Link>
            </div>
            <div className={`text-primary font-bold text-lg text-center pt-2 ${styles.name}`}>
                {data.name.en}
            </div>
        </div>
    )
}