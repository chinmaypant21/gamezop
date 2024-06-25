import Link from "next/link";
import Image from "next/image";

export default function GameCard({ data }: any) {
    return (
        <div className="relative">
            <button aria-label="Favourite" className="favourite-btn">
                <Image src={'/icons/favourite_grey.svg'} alt="__" height={30} width={30} className="favourite-img" />
                {/* <Image src={'/icons/favourite_red.svg'} alt="__" height={30} width={30} /> */}
            </button>
            <Link target="_blank" href={data.url}>
                <Image alt="__" src={data.assets.square} height={190} width={190} className="rounded-2xl w-full" />
                <h3 className="text-primary font-bold text-lg text-center pt-2">{data.name.en}</h3>
                {/* overflow-hidden text-ellipsis whitespace-nowrap w-[50px] */}
            </Link>
        </div>
    )
}