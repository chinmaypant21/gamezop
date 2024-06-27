'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import FavIcon from '@icons/favourite_grey.svg'
import FavSelectIcon from '@icons/favourite_red.svg'

import styles from './FavouriteBtn.module.css'

export default function FavouriteBtn(){
    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <button 
            onClick={() => setIsSelected(prev => !prev)}
            aria-label="Favourite"
            className={styles.favourite_btn}
        >
        {
            isSelected
            ? (
                <Image 
                    src={FavSelectIcon}
                    alt="Favourite Selected"
                    height={30}
                    width={30} 
                />
            )
            : (
                <Image
                    src={FavIcon}
                    alt="Favourite"
                    height={30}
                    width={30} 
                />
            )
        }
        </button>
    )
}