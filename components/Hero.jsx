import React from 'react'
import Image from 'next/image'
import hero from '../public/hero_image.png'

const Hero = () => {
  return (
    <div className="wrapper">
        <div className="hero">
            <div className="grid grid-cols-2">
            <div className='hero-text'>
                <h1>Active Thematic</h1>
            </div>
            <div className='hero-img'>
            <Image
                src={hero}
                alt="Hero Image"
                width={506}
                height={500}
            />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero