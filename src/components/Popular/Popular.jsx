import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-3 h-4/5 mt-10'>
        <h1 className='text-ptext font-semibold text-5xl'>POPULAR IN WOMEN</h1>
        <hr className='w-52 h-2 rounded-lg bg-gray-800' />
        <div className="popular-item mt-12 flex gap-7">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular