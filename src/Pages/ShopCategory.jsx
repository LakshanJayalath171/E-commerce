import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assest/dropdown_icon.png"
import Item from '../Components/Item/Item'


const ShopCategory = (props) => {

  const all_product = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />

      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>

        <div className='shop-categorySort'>
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div>
        {all_product.map((item,i)=>{
          if(props.category === Item.category){
              return <Item key={i} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price}/>
          }
          else{
            return null
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory