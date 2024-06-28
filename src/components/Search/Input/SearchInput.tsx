'use client'

import { Fragment, MouseEvent, Suspense, lazy, useEffect, useRef, useState } from "react"
import Image from "next/image";

import useDebounce from "@/hooks/useDebounce";
import Loading from "@/components/Loading/Loading";
import filterSearch from "@/lib/filter_search_data";
const SearchGameList = lazy(() => import('../Dropdown/SearchGameList'))

import CrossIcon from '@icons/cross.svg'
import SearchIcon from '@icons/search_dark.svg'

import styles from '../Search.module.css'


interface Props {
    gameData: Game[]
}

export default function SearchInput({ gameData }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [value, setValue]   = useState<string>('');
    const [filteredData, setFilteredData] = useState<Game[] | null>([]);

    const debouncedFilter = useDebounce(filterSearch,300)

    const inputRef = useRef<HTMLInputElement>(null);
    
    function handleClick(){
        setIsOpen(true);
    }


    function handleBlur(e: any){
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setValue('');
            setIsOpen(false);
        }
    }

    function handleClearInput(e: MouseEvent<HTMLElement>){
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

        debouncedFilter(value, gameData, setFilteredData);
    }, [value])

    return (
        <div
            className="cursor-pointer ml-auto relative h-full"
            style={{gridArea:'search'}}
            tabIndex={0}
            onBlur={handleBlur}
            onClick={handleClick}
        >
        {
            isOpen
            ? (
                <Fragment>
                    <div className={styles.search_input_container}>
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
                                src={CrossIcon}
                                height='25' width='25' 
                                alt='Close'
                            />
                        </div>
                    </div>
                    {
                        filteredData ? (
                        <div className={styles.search_result_menu}>
                            <Suspense fallback={<Loading />}>
                                <SearchGameList data={filteredData} />
                            </Suspense>
                        </div>
                        ) : null
                    }
                </Fragment>
            ) : (
                <div className={styles.search_icon_container}>
                    <Image src={SearchIcon} width={20} height={20} alt="Search" />
                </div>
            )
        }
        </div>
    )
}
