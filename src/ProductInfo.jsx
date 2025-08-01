import React from 'react';
import { useParams } from 'react-router-dom';
import alldata from './DummyData';
function ProductInfo()
{
   const params= useParams();
   const sku=params.sku;
   
let product;

for(let i=0; i<alldata.length ;i++)
{
   let p=alldata[i];
   if(sku==p.sku)
      {
          product=p;
         break;
      }
}

    return (
      <div className='w-screen h-screen justify-center  bg-gray-300 flex items-center '>
        <div className="flex bg-white  m-5 w-250">
            <img src={product.link} className="w-2/5 m-10"/>
            <div className="m-10 ml-3">
                 <h1 className="font-semibold font-sans text-4xl">
                    {product.title}
                 </h1>
                 <h2 className="font-sans font-semibold text-2xl m-3 ml-0">
                    ${product.price}.00
                 </h2>
                 <p className="font-sans  text-l  m-3 ml-0">
                    {product.desc}
                 </p>
                 <div className='gap-1'>
                  <input type="number" placeholder="1" className="font-sans  w-20 border-1 m-3 py-1 ml-0"></input>
                 <button className="font-sans font-semibold text-xl m-3 ml-0 border-2 bg-red-400 text-white px-10 py-1">
                    Add To Cart
                 </button>
                 </div>
                
            </div>
</div>
        </div>
    )
}
export default ProductInfo