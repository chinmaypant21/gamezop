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
                slidesPerView={6}
                breakpoints={{
                    300: {
                        slidesPerView: 2.2,
                    },
                    500: {
                        slidesPerView: 3.2,
                    },
                    640: {
                        slidesPerView: 4.5,
                    },
                    1024: {
                        slidesPerView: 5.5,
                    }
                }}
                autoplay={{ delay: 2000, pauseOnMouseEnter: true}}
                modules={[Autoplay, Scrollbar]}
            >
            {
                games.map(game => (
                    <SwiperSlide key={game.code} className={styles.card_wrapper}>
                        <GameCard data={game} hideInfo />
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}