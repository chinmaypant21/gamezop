"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import GameCard from '@/components/GameCard/GameCard';

import styles from './GameSwiper.module.css'
import 'swiper/css';

interface Props {
    games: Game[]
}

export default function GameSwiper({ games }: Props) {
    return (
        <div>
            <Swiper
                className={styles.game_section}
                navigation
                // spaceBetween={20}
                slidesPerView={6}
                breakpoints={{
                    300: {
                        slidesPerView: 2.2,
                        // spaceBetween:8
                    },
                    500: {
                        slidesPerView: 3.2,
                        // spaceBetween: 12
                    },
                    640: {
                        slidesPerView: 4.2,
                        // spaceBetween: 16
                    },
                    1024: {
                        slidesPerView: 5.2,
                        // spaceBetween: 20
                    }
                }}
                // autoplay={{ delay: 2000, pauseOnMouseEnter: true}}
                modules={[Autoplay, Scrollbar]}
                // loop
            >
            {
                games.map(game => (
                    <SwiperSlide key={game.code} className={styles.card_wrapper}>
                        <GameCard data={game} />
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}