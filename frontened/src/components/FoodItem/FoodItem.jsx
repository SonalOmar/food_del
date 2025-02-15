import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = () => {
    
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='food_item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {
                !itemCount?<img className='add' onClick={()=>addToCart(id)}src={assets.add_icon_white} alt=""/>:
                <div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{itemCount}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
          
                <p className="food-item-desc">{description}</p>
          <p className="food-tem-price">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
