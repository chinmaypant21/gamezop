'use client'

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react"
import styles from '@/assets/searchbar.module.css'
import Image from "next/image";
import SearchGameList from "./SearchGameList";
import useDebounce from "@/hooks/useDebounce";

const MAX_RESULTS = 25;

const filterData = (value: any, gameData: any, setFilteredData: any) => {
    console.log('filtered')

    const filtered = gameData.filter((game: any) => {
        const query = value.toLowerCase();

        return (
            game.name.en.toLowerCase().includes(query) ||
            game.description.en.toLowerCase().includes(query) ||
            game.tags.en.some((tag: any) => tag.toLowerCase().includes(query))
        )
    });

    setFilteredData(filtered.slice(0,MAX_RESULTS));
}

export default function Searchbar({ gameData }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue]   = useState('');
    const [filteredData, setFilteredData] = useState<[] | null>([]);
    const debouncedFilter = useDebounce(filterData,300)


    const inputRef = useRef<any>(null);
    
    function handleClick(){
        setIsOpen(true);
    }


    function handleBlur(e: any){
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setValue('');
            setIsOpen(false);
        }
    }

    function handleClearInput(e: any){
        e.stopPropagation();
        setValue('');
        setIsOpen(false);
    }

    useEffect(() => {
        if(isOpen && inputRef.current){
            inputRef.current.focus();
        }
    }, [isOpen])

    useEffect(() => {
        if(!value) {
            setFilteredData(null);
            return;
        }
        console.log('isCalled')
        debouncedFilter(value, gameData, setFilteredData);
    }, [value])

    return (
        <div
            className="cursor-pointer ml-auto relative"
            tabIndex={0}
            onBlur={handleBlur}
            onClick={handleClick}
        >
        {
            isOpen
            ? (
                <Fragment>
                    <div className={styles.search_input_container}>

                        {/* <div>start</div> */}
                        <input
                            ref={inputRef}
                            tabIndex={0}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className={styles.input}
                            type="text"
                            placeholder="Search for games"
                            autoComplete="off"
                        />
                        <div 
                            onClick={handleClearInput}
                            className={styles.clear_input_btn}
                        >
                            <Image 
                                src='https://static.gamezop.com/comet/assets/img/cross.svg'
                                height='25' width='25' 
                                alt='Close'
                            />
                        </div>
                    </div>
                    {
                        filteredData ? (
                        <div className={styles.search_result_menu}>
                            <SearchGameList data={filteredData} />
                        </div>
                        ) : null
                    }
                </Fragment>
            )
            : <div className={styles.search_icon_container}>
                <Image src={'/search.png'} width={20} height={20} alt="Search" />
            </div>
        }

        </div>
    )
}
