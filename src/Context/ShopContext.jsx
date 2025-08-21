import React, { createContext } from "react";
import all_products from "../Components/Assest/all_product"

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null)

const ShopContextProvider = (props)=>{

    const contextValue = {all_products}
   
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
