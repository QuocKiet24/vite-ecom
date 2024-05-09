import React from 'react'
import arrow_icon from '../../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum flex gap-5 items-center text-gray-400 text-xl font-semibold mx-48 my-24 capitalize' >
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum