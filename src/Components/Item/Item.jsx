import React from 'react'
import "./item.css"

const Item = (props) => {
  return (
    <div className="items">
      <img src={props.image} alt="" />
      <p>{props.name}</p>

      <div className='price'>
        <div className="item-price-new">${props.price_new}</div>
        <div className="item-price-old">${props.price_old}</div>
      </div>
    </div>
  );
}

export default Item