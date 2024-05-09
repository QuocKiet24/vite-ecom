import React from 'react'
import new_collections from '../../assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections flex flex-col items-center gap-3 mb-24 mt-10'>
        <h1 className='text-ptext font-semibold text-5xl'>NEW COLLECTIONS</h1>
        <hr className='w-52 h-2 rounded-lg bg-gray-800'/>
        <div className="collections grid grid-cols-4 mt-12 gap-7">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections