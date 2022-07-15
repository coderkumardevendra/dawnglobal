import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import hero from '../public/hero_image.png'

const Hero = () => {
  return (
    <div className="wrapper">
        <div className="hero">
            <div className='hero-text'>
                <h1>Active Thematic</h1>
                <h2 className='bg-gradient'>ETF Platform</h2>
                <p>Pioneering structurally growing themes through innovative ETF strategies</p>
                <Link href={"/"}>
                    <a className="btn primary-btn">
                    Invest
                    </a>
                </Link>
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
  )
}

export default Hero