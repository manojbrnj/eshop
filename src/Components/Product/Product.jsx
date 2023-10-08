import React from 'react';
import '../Product/Product.css';
function Product({title, price, star, image}) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p>${price}</p>
        <div className='product__rating'>
          {Array(star)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} className='product__image' alt='' />
      <button className='product__button' type='button'>
        <span className='textspan'>Add To Basket</span>
      </button>
    </div>
  );
}

export default Product;
