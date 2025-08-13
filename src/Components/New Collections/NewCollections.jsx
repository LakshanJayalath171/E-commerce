import React from 'react'
import "./newcollections.css"
import new_collections from "../Assest/new_collections"
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {new_collections.map((item,i)=>{
                return <Item key={i} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections