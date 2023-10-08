import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        value={2456981}
        displayType={'text'}
        thousandSeparator={true}
        decimalScale={2}
        prefix={'$'}
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items) : <strong>$0</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
            <button className='subtotal__button'>SubTotal</button>
          </>
        )}
      />
    </div>
  );
}

export default Subtotal;
