import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom';

const Item = (props) => {

  

  return (
    <div className="items">
      <Link to={`/product/${props.id}`}><img onClick={scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>

      <div className='price'>
        <div className="item-price-new">${props.price_new}</div>
        <div className="item-price-old">${props.price_old}</div>
      </div>
    </div>
  );
}

export default Item