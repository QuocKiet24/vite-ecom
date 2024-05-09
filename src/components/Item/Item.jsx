import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item w-80 hover:scale-105 delay-75 2xl:w-[220px] 2xl:text-base xl:w-[130px] xl:text-sm lg:w-[80px] lg:text-xs'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" className='2xl:w-[220px] xl:w-[130px] lg:w-[80px]'/></Link>
        <p className='my-2 mx-0'>{props.name}</p>
        <div className="item-prices flex gap-5">
            <div className="item-price-new text-gray-700 font-semibold text-xl">
                ${props.new_price}
            </div>
            <div className="item-price-old  text-gray-300 font-medium text-xl line-through xl:text-sm">
                ${props.old_price}   
            </div>
        </div>
    </div>
  )
}

export default Item