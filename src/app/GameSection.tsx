"use client"
import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import styles from '@/assets/game.module.css';

function GameSection({ games }: any) {

    return (
        <div className={styles.gameContainer}>
        {
            games ?
            games.map((game: any) => (
                <GameCard key={game.code} data={game} />
            ))

            : <div>Loading</div>
        }
        </div>
    )
}

export default GameSection