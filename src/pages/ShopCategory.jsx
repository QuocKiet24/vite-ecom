import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
        <img src={props.banner} alt="" className='block my-7 mx-auto w-5/6' />
        <div className="shopcategory-indexSort flex my-0 mx-40 justify-between items-center">
          <p>
            <span className='font-semibold'>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort flex items-center py-3 px-5 rounded-3xl border border-solid border-gray-400">
            Sort by <img src={dropdown_icon} alt="" className='ml-2'/>
          </div>
        </div>
        <div className="shopcategory-products my-5 mx-40 grid grid-cols-4 gap-y-20">
            {all_product.map((item,i)=>{
              if(props.category === item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
              else{
                return null;
              }
            })}
        </div>
        <div className="shopcategory-loadmore flex justify-center items-center my-36 mx-auto w-56 h-16 rounded-full bg-slate-100 text-xl font-medium">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory