import React from 'react';
import Product from './product';
function ProductList( { products } )
{
  return(
    <div className='flex  justify-center flex-wrap gap-3'>
         {products.map( function (item){
            return(
                <Product 
                category={item.category}
                 title={item.title} 
                 price={item.price} 
                 link={item.link}
                 sku={item.sku}>

                 </Product>
            );
         })}
    </div>
  );
}
export default ProductList