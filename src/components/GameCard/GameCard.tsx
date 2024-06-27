import Link from "next/link";
import Image from "next/image";

import FavouriteBtn from "@/components/Buttons/FavouriteBtn/FavouriteBtn";
import InfoBtn from "@/components/Buttons/InfoBtn/InfoBtn";

import styles from './GameCard.module.css'

interface Props {
    data: Game
}

export default function GameCard({ data }: Props) {
    return (
        <div className={styles.game_card}>
            <div className="relative">
                <FavouriteBtn />
                <InfoBtn data={data} />
                <Link target="_blank" href={data.url}>
                    <Image alt="Game Image" src={data.assets.square} height={190} width={190} className="rounded-2xl w-full" />
                </Link>
            </div>
            <div className={`text-primary font-bold text-lg text-center pt-2 ${styles.name}`}>
                {data.name.en}
                {/* <h3 className="text-primary font-bold text-lg text-center pt-2">{data.name.en}</h3> */}
            </div>
        </div>
    )
}