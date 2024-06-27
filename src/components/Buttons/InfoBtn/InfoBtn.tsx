import Image from 'next/image'
import styles from './InfoBtn.module.css'

import InfoIcon from '@icons/info_icon.png'

interface Props {
    data: Game
}

function InfoBtn({ data }: Props) {
    return (
        <div className={styles.info_container}>
            <button aria-label="Info">
                <Image src={InfoIcon} alt="Info Icon" height={30} width={30} />
            </button>

            <div className={styles.info_popup}>
                <h5 className={styles.info_heading}>{data.name.en}</h5>
                <div className={styles.info_description}>{data.description.en}</div>
                <div className="text-sm mt-1"><b>Gameplays:</b> {data.gamePlays}</div>
                {
                    data.gamePreviews.en ? (
                        <div className='text-sm italic text-blue-400'>
                            <a target="_blank" href={data.gamePreviews.en}>Watch preview</a>
                        </div>
                    )
                        : <div className="text-sm italic text-gray-800">Preview not available</div>
                }
            </div>
        </div>
    )
}

export default InfoBtn