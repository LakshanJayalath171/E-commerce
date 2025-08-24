import React, { useContext } from 'react'
import "./cartitems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../../Components/Assest/cart_cross_icon.png"

const CartItems = () => {
  
  const {all_products,removeFromCart,cartItems,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className="cartItems">
      <div className="cart_item_fomat_main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cart-items-fomat cart_item_fomat_main">
                <img src={e.image} alt="" className="cart-icon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-items-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img
                  className='cart-icon-remove-icon'
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        } else {
          console.log("Nothing In the cart");
        }
      })}

      <div className="cart-items-down">
        <div className='cart-items-total'>
          <h1></h1>
          <div>
            <div className='cart-items-total-items'>
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />

            <div className='cart-items-total-items'>
              <p>Shippinng Fee</p>
              <p>Free</p>
            </div>
            <hr />

          </div>

          <div className='cart-items-total-items'>
            <h2>Total</h2>
            <h2>${getTotalCartAmount()}</h2>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitems-promocode">
        <p>If You Have a Promo Code, Enter It Here..</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='Promo Code'/>
          <button>Submit</button>
        </div>
      </div>
        
      </div>
      
    </div>
  );
}

export default CartItems