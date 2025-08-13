import React from 'react'
import "./popular.css"
import data_product from "../Assest/data"

import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-item'>
            {data_product.map((item , i)=>{
                return <Item key={i} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular