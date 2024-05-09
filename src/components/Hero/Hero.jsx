import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero flex h-screen bg-gradient-to-b from-pink-200 to-violet-200'>
        <div className="hero-left flex-1 flex flex-col justify-center gap-5 pl-44 leading-tight xl:pl-[100px]">
            <h2 className='text-black text-2xl font-semibold xl:text-[22px]'>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon flex items-center gap-5">
                    <p className='text-ptext text-8xl font-bold xl:text-[60px]'>new</p>
                    <img src={hand_icon} alt="" className='w-28 xl:w-[80px]'/>
                </div>
                <p className='text-ptext text-8xl font-bold xl:text-[60px]'>collections</p>
                <p className='text-ptext text-8xl font-bold xl:text-[60px]'>for everyone</p>
            </div>
            <div className="hero-latest-btn flex items-center justify-center gap-4 w-80 h-16 rounded-full mt-20 bg-red-600 text-white text-xl font-medium xl:gap-5 xl:w-[250px] xl:h-[60px] xl:mt-5">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right flex flex-1 items-center justify-center">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero