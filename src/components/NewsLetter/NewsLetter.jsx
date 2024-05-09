import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter w-3/4 h-96 flex flex-col items-center justify-center m-auto py-0 px-36 mb-36 gap-7 bg-gradient-to-b from-pink-200 to-violet-200'>
        <h1 className='text-gray-500 text-4xl font-semibold'>Get Exclusive Offers On Your Email</h1>
        <p className='text-gray-600 text-xl'>Subscribe to our newsletter and stay updated</p>
        <div className='flex items-center justify-between bg-white w-10/12 h-16 rounded-full border border-solid border-white'>
            <input type="email" placeholder='Enter Your Email' className='w-3/5 ml-7 border-0 outline-none text-gray-500 text-xl' />
            <button className='w-52 h-16 bg-black rounded-full text-white text-xl cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter