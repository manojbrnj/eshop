import React from 'react';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images.pexels.com/photos/1080722/pexels-photo-1080722.jpeg?cs=srgb&dl=agriculture-beautiful-view-city-park-1080722.jpg&fm=jpg'
          alt=''
          className='checkout__ads'
        />
        <h2>You Shopping Basket</h2>
        <CheckoutProduct />
        <CheckoutProduct />
        <CheckoutProduct />
        <CheckoutProduct />
        <CheckoutProduct />
        <CheckoutProduct />
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
