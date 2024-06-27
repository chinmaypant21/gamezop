import Link from "next/link";
import Image from "next/image";

import FavIcon from '@icons/favourite_grey.svg'
import FavSelectIcon from '@icons/favourite_red.svg'
import InfoIcon from '@icons/info_icon.png'

interface Props {
    data: Game
}

export default function GameCard({ data }: Props) {
    return (
        <div className="relative">
            <button aria-label="Favourite" className="favourite-btn">
                <Image src={FavIcon} alt="Favourite" height={30} width={30} className="favourite-img" />
                {/* <Image src={'/icons/favourite_red.svg'} alt="Favourite Selected" height={30} width={30} /> */}
            </button>
            <div className="info-container">
                <button aria-label="Info" className="info-btn">
                    <Image src={InfoIcon} alt="Info Icon" height={30} width={30} className="info-img" />
                </button>

                <div className="xyz">
                    <h5 className="info_heading">{data.name.en}</h5>
                    <div className="info_description">{data.description.en}</div>
                    <div className="info_gameplay text-sm mt-1"><b>Gameplays:</b> {data.gamePlays}</div>
                    {
                        data.gamePreviews.en ? (
                            <div className="info_game_preview text-sm italic text-blue-500">
                                <a target="_blank" href={data.gamePreviews.en}>Watch preview</a>
                            </div>
                        )
                        : <div className="text-sm italic text-gray-800">Preview not available</div>
                    }
                </div>
            </div>
            <Link target="_blank" href={data.url}>
                <Image alt="Game Image" src={data.assets.square} height={190} width={190} className="rounded-2xl w-full" />
                <h3 className="text-primary font-bold text-lg text-center pt-2">{data.name.en}</h3>
                {/* overflow-hidden text-ellipsis whitespace-nowrap w-[50px] */}
            </Link>
        </div>
    )
}