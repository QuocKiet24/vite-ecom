import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers w-3/4 h-4/6 flex m-auto py-0 px-36 mb-36 mt-10 bg-gradient-to-b from-pink-200 to-violet-200'>
        <div className="offers-left flex-1 flex flex-col justify-center">
            <h1 className='text-ptext text-7xl font-semibold'>Exclusive</h1>
            <h1 className='text-ptext text-7xl font-semibold'>Offers For You</h1>
            <p className='text-ptext text-xl font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-72 h-16 rounded-3xl bg-red-600 border-0 text-white text-xl font-medium mt-7 cursor-pointer'>Check Now</button>
        </div>
        <div className="offers-right flex-1 flex items-center justify-end pt-12">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers