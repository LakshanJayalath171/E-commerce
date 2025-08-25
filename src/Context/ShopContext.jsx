import React, { createContext, useState } from "react";
import all_products from "../Components/Assest/all_product"
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null)



const getDefaultcart = () =>{
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;   
    }
    return cart
}

const addNoftify = ()=>{
    toast("Item Added To Cart Successfully")
}

const removeNotify = ()=>{
    toast("Item Remove From The Cart Successfully")
}

const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultcart())
    

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        addNoftify()
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        removeNotify()
    }

    const totalCartItems = ()=>{
        let totalItem  = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }
   
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_products.find((product)=>product.id ===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
           
        }
         return totalAmount
    }
    const contextValue = {totalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
