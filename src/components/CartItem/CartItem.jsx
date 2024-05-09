import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png'

const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitem my-24 mx-40'>
        <div className="cartitem-format-main grid grid-cols-6 items-center gap-20 py-5 px-0 text-stone-600 text-xl font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-1  bg-slate-50 border-0'/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
                {
                    return <div>
                                <div className="cartitem-format grid grid-cols-6 items-center gap-20 py-5 px-0 text-stone-600 ">
                                    <img className='carticon-product-icon h-16' src={e.image} alt="" />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cartitem-quantity w-16 h-12 border-2 border-solid border-slate-100 bg-slate-200'>{cartItems[e.id]}</button>
                                    <p>${e.new_price*cartItems[e.id]}</p>
                                    <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" className='w-4 my-0 mx-10 cursor-pointer' />
                                </div>
                                <hr />
                            </div>
                }
                return null;
        })}
        <div className="cartitems-down flex mx-0 my-24">
            <div className="cartitems-total flex-1 flex flex-col mr-48 gap-10">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item flex justify-between py-4 px-0">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item flex justify-between py-4 px-0">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item flex justify-between py-4 px-0">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='w-64 h-14 outline-none border-0 bg-red-600 text-slate-100 text-xs font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
                <div className="cartitems-promocode  text-xs font-medium">
                    <p className='text-stone-700'>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox w-wpromo mt-4 pl-5 h-14 bg-bgpromo">
                        <input type="text" placeholder='promo code' className='border-0 outline-none bg-transparent text-xs w-80 h-12' />
                        <button className='w-40 h-14 text-xs bg-black text-white'>Submit</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default CartItem