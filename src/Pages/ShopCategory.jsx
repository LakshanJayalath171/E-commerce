import React, { useContext } from 'react'
import "./Css/shopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import dropdown_icon from "../Components/Assest/dropdown_icon.png"

const ShopCategory = (props) => {

  const {all_products} = useContext(ShopContext)
  console.log("All Products",all_products)
  return (
    <div className="shop-category">

      <img className='shopcategory-banner' src={props.banner} alt="" />

      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>

        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_products.map((item, i) => {
          if(props.category === item.category){
            return<Item key={i} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price}/>
          }
          else{
            console.log("No mathching data")
          }
        })}
      </div>

      <div className="shop-category-loadmore">
        Explore more
      </div>
    </div>
  );
}

export default ShopCategory