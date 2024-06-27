"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import GameCard from '@/components/GameCard/GameCard';

import styles from './GameSwiper.module.css'
import 'swiper/css';
import { Autoplay, Scrollbar } from 'swiper/modules';

interface Props {
    games: Game[]
}

export default function GameSwiper({ games }: Props) {
    return (
        <div>
            <Swiper
                className={styles.game_section}
                navigation
                spaceBetween={20}
                slidesPerView={6}
                autoplay={{ delay: 2000, pauseOnMouseEnter: true}}
                modules={[Autoplay, Scrollbar]}
                loop
            >
            {
                games.slice(0, 20).map(game => (
                    <SwiperSlide key={game.code} className={styles.card_wrapper}>
                        {/* <div className={styles.card_wrapper}> */}
                            <GameCard data={game} />
                        {/* </div> */}
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}