import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox my-28 mx-40'>
        <div className="descriptionbox-navigator flex">
            <div className="descriptionbox-nav-box flex items-center justify-center text-xl font-semibold w-40 h-16 border border-solid border-gray-400">Description</div>
            <div className="descriptionbox-nav-box fade bg-neutral-200 text-stone-800 flex items-center justify-center text-xl font-semibold w-40 h-16 border border-solid border-gray-400">Reviews (102)</div>
        </div>
        <div className="descriptionbox-desciption flex flex-col gap-6 border border-solid border-gray-400 p-12 pb-16">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum quas velit, hic quia illum! Totam quaerat ad nam laboriosam. Nemo totam molestiae quas dolore aliquam maxime error rem, recusandae suscipit deleniti commodi consequuntur molestias atque labore dolor veniam debitis officiis, exercitationem rerum, cupiditate et. Necessitatibus amet, dolorem, voluptatem nisi impedit eos illum non consectetur nobis libero, blanditiis cumque. Tempore libero consequatur maiores eos. Nostrum tempora fuga voluptates? Nisi cum omnis aliquam explicabo adipisci error vitae rem iste laborum dolore qui ab recusandae nam tempore,
                 autem magnam quae officia iure minima culpa ut nihil est ipsa? Fugit repudiandae officia eaque!
            </p>
            <p>
                E-commerce websites typically display products or services along with detailed desciptions, images, prices, and any avaliable variations (eg, sizes, colors). Each product usually has its own dedicated page with relevant infomation.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox