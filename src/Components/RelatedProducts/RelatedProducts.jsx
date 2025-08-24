import React from 'react'
import "./relatedproduct.css"
import data_product from "../Assest/data"
import Item from "../Item/Item.jsx"

const RelatedProducts = () => {
  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <hr />
        <div className='related-products-item'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts