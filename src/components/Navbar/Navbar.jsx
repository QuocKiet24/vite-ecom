import React, { useContext, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

      const [menu,setMenu] = useState("shop");
      const {getTotalCartItems} =useContext(ShopContext);

    

  return (
    <div className='navbar flex justify-around items-center p-4 shadow '>
        <div className="nav-logo flex items-center gap-3 md:w-5 md:h-5 md:flex md:justify-center  md:text-xs">
          <img src={logo} alt="" className=''/>
          <p className='text-ptext text-xl font-semibold '>KIETSTORE</p>
        </div>
        <ul className="nav-menu flex item-center gap-8 text-xl font-medium cursor-pointer xl:gap-7 xl:text-sm lg:gap-6 lg:text-xs md:flex md:h-20 md:w-full md:absolute md:bg-white md:justify-center md:top-12 md:text-xs">
          <li onClick={()=>{setMenu("shop")}} className='flex flex-col items-center justify-center gap-1'><Link to ='/'>Shop</Link>{menu==="shop"?<hr className='border-0 w-4/5 h-1 rounded-xl bg-red-500'/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}} className='flex flex-col items-center justify-center gap-1'><Link to ='/mens'>Men</Link>{menu==="mens"?<hr className='border-0 w-4/5 h-1 rounded-xl bg-red-500'/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}} className='flex flex-col items-center justify-center gap-1'><Link to ='/womens'>Women</Link>{menu==="womens"?<hr className='border-0 w-4/5 h-1 rounded-xl bg-red-500'/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}} className='flex flex-col items-center justify-center gap-1'><Link to ='/kids'>Kids</Link>{menu==="kids"?<hr className='border-0 w-4/5 h-1 rounded-xl bg-red-500'/>:<></>}</li>
        </ul>
        <div className="nav-login-cart flex items-center gap-11 md:hidden">
          <Link to='/login'><button className='w-36 h-14 outline-none border border-solid border-gray-500 rounded-3xl text-gray-700 text-xl font-medium bg-white cursor-pointer active:bg-slate-400 md:hidden'>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" className=''/></Link>
          <div className="nav-cart-count w-5 h-5 rounded-xl bg-red-700 text-white flex items-center justify-center -mt-9 -ml-14 ">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar