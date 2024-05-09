import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup w-full h-5/6 bg-pink-200 pt-24 pb-56'>
        <div className="loginsignup-container w-1/3 h-5/6 bg-white m-auto py-10 px-14">
          <h1 className='my-5 mx-0'>Sign Up</h1>
          <div className="loginsignup-fields flex flex-col gap-7 mt-7">
            <input type="text" placeholder='Your Name' className='h-16 w-full pl-5 border border-solid border-neutral-300 outline-none text-gray-500 text-xl'/>
            <input type="email" placeholder='Email Address' className='h-16 w-full pl-5 border border-solid border-neutral-300 outline-none text-gray-500 text-xl' />
            <input type="password" placeholder='Password' className='h-16 w-full pl-5 border border-solid border-neutral-300 outline-none text-gray-500 text-xl' />
          </div>
          <button className='w-full h-16 text-white bg-red-500 mt-8 font-medium cursor-pointer'>Continue</button>
          <p className="loginsignup-login mt-5 text-gray-500 text-xl font-medium">Already have an account? <span className='text-red-500 font-semibold'>Login here</span></p>
          <div className="loginsignup-agree flex items-center mt-6 gap-5 text-gray-600 text-xs font-medium">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the term of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup