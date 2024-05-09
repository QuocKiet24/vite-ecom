import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-3 h-4/5 mb-16'>
        <h1 className='text-stone-800 text-5xl font-semibold'>Related Products</h1>
        <hr className='w-48 h-1 rounded-xl bg-stone-700'/>
        <div className="relatedproducts-item mt-12 flex gap-8">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts