import React from 'react';
import {Link} from "react-router-dom";

function Product({link,category,title,price,sku})
{
    return (
        <div className="text-left flex flex-col justify-start gap-1 p-[5px] w-80">
            <img className="w-80" src={link}/>
            <h3 className="text-gray-400 text-xl">
                {category}
            </h3>
            <h1 className="font-bold text-2xl">
                {title}
            </h1>
            <p className="text-red-500 ">
                ☆☆☆☆☆
            </p>
            <div className='flex gap-2 justify-between'>
            
                
            <p className="font-bold text-xl">  
                ${price}.00
            </p>
         <Link to={"/product/"+sku} className="text-red-400 ">
            View Details
          </Link>
             
            </div>

        </div>
    )
}
export default Product