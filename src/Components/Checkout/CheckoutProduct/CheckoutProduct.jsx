import React from 'react';
import './CheckoutProduct.css';
function CheckoutProduct({
  title = 'Amazon.com : Happiness House New Cartoon Unisex Fashion Snapback Hat ...',
  price = 50,
  star = 3,
  image = 'https://m.media-amazon.com/images/I/71HKMdAG0KL._AC_SX569_.jpg',
}) {
  return (
    <div className='checkoutproduct'>
      <img src={image} className='checkoutproduct__image' alt='' />
      <div className='checkoutproduct__info'>
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>

        <div className='checkoutproduct__rating'>
          {Array(star)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button className='checkoutproduct__button' type='button'>
          <span className='textspan'>Remove from basket</span>
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
