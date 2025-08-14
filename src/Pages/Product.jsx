import React, { useContext } from 'react'
import ShopContext from "../Context/ShopContext"
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {all_products} = useContext(ShopContext)
  console.log(all_products)

  const product_id = useParams()
  
  return (
    <div className='product'>
      <Breadcrum products={products}/>
    </div>
  )
}

export default Product