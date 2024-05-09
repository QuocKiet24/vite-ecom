import React, { useContext } from 'react'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay flex mx-48 my-24 '>
        <div className="productdisplay-left flex gap-4 w-full">
            <div className="productdisplay-img-list flex flex-col gap-4">
                <img src= {product.image} alt="" className='h-40'/>
                <img src= {product.image} alt="" className='h-40'/>
                <img src= {product.image} alt="" className='h-40'/>
                <img src= {product.image} alt="" className='h-40'/>
            </div>
            <div className="productdisplay-img">
            <img className='productdisplay-main-img w-wimg h-himg' src= {product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right mx-16 my-0 flex flex-col">
            <h1 className='text-slate-500 text-4xl font-bold'>{product.name}</h1>
            <div className="productdisplay-right-star flex items-center mt-3 gap-1 text-slate-900 text-xs">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(244)</p>
            </div>
            <div className="productdisplay-right-prices flex mx-0 my-10 gap-8 text-xl font-bold">
                <div className="productdisplay-right-price-old text-gray-400 line-through">${product.old_price}</div>
                <div className="productdisplay-right-price-new text-red-500">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eum, doloribus enim mollitia voluptate neque eaque corporis commodi ratione fugiat aspernatur harum dolor tempore? Quia placeat dolorum, optio non beatae cupiditate obcaecati laboriosam deserunt eius quo! Suscipit fuga tempora dicta!
            </div>
            <div className="productdisplay-right-size flex my-7 mx-0 gap-5">
                <h1 className='mt-14 text-gray-400 text-xl font-semibold'>Select Size</h1>
                <div className="productdisplay-right-size flex my-7 mx-0 gap-5">
                    <div className='px-6 py-4 bg-slate-100 border border-solid border-slate-300 rounded-md cursor-pointer'>S</div>
                    <div className='px-6 py-4 bg-slate-100 border border-solid border-slate-300 rounded-md cursor-pointer'>M</div>
                    <div className='px-6 py-4 bg-slate-100 border border-solid border-slate-300 rounded-md cursor-pointer'>L</div>
                    <div className='px-6 py-4 bg-slate-100 border border-solid border-slate-300 rounded-md cursor-pointer'>XL</div>
                    <div className='px-6 py-4 bg-slate-100 border border-solid border-slate-300 rounded-md cursor-pointer'>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='py-5 px-10 text-xl font-medium text-white bg-red-600 mb-10 border-0 outline-none cursor-pointer'>ADD TO CART</button>
            <p className='productdisplay-right-category mt-3'><span className='font-medium'>Category :</span >Women, T-Shirt, Crop top</p>
            <p className='productdisplay-right-category mt-3'><span className='font-medium'>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay