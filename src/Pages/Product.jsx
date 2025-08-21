import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import { useParams } from 'react-router-dom';

const Product = () => {

  const s_context = useContext(ShopContext)
  
  // Check if context is provided
  if (!s_context) {
    return <div>Error: ShopContext not provided</div>;
  }
  
  const { all_products } = s_context;
  const { id } = useParams(); // Destructure the 'id' parameter

  // Find product and handle undefined cases
  const product = all_products && Array.isArray(all_products)
    ? all_products.find((e) => e.id === Number(id))
    : null;

  return (
    <div className='product'>
      {product ? <Breadcrum product={product} /> : <div>Product not found</div>}
    </div>
  );
};

export default Product;