const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL
import Image from 'next/image'

export default function TeamCard({name, intro, position, profile_image}) {
    return (
        <div className='card-item'>
            <div className='img-container'>
                <img src={`${assetsUrl}/${profile_image}`} />
                <div className='team-intro'>{intro}</div>
            </div>
            <h3>{name}</h3>
            <h5>{position}</h5>
        </div>
    )
}