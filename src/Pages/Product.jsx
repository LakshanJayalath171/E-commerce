import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import {useParams}  from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const s_context = useContext(ShopContext)
  
  // Check if context is provided
  if (!s_context) {
    return <div>Error: ShopContext not provided</div>;
  }
  
  const { all_products } = s_context;
  const { id } = useParams(); // Destructure the 'id' parameter
  
  const product = all_products.find((e)=>e.id==Number(id));
  return (
    <div className='product'>
      {product ? <Breadcrum product={product} /> : <div>Product not found</div>}

      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;