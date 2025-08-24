import React, { useContext } from 'react'
import "./productdisplay.css"
import star_icon from "../Assest/star_icon.png"
import star_dhull_icon from "../Assest/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
        <div className='product-display-left'>
            <div className='product-display-image-list'>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            
            <div className='product-display-img'>
                <img className='product-displa-main-image' src={product.image} alt="" />
            </div>
        </div>
        <div className='product-display-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dhull_icon} alt="" />
                <p>(122)</p>
            </div>

            <div className='product-display-right-pricess'>
                <div className='product-display-right-price-old'>${product.old_price}</div>
                <div className='product-display-right-price-new'>${product.new_price}</div>
            </div>

            <div className='product-display-right-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum autem temporibus cupiditate velit qui architecto quis! Provident delectus voluptates quia, aspernatur ex perspiciatis ratione mollitia qui amet a blanditiis dolore, odio, assumenda reiciendis voluptatibus voluptatum? Tempore nesciunt ullam deserunt eius, repellendus consequatur neque suscipit nobis, culpa, laboriosam dolores voluptas!
            </div>

            <div className='product-display-right-size'>
                <h1>Select Size</h1>
            </div>

            <div className="product-display-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>

            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='product-display-right-category'>Category<span>Women,T-shirt,crop Top</span></p>
            <p className='product-display-right-category'>Category<span>Modern, Latest</span></p>

        </div>
    </div>
  )
}

export default ProductDisplay