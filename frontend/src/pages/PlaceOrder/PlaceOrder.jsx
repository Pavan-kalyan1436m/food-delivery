import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const {getCartItemsTotal} = useContext(StoreContext);
  return (
    <form action="">
      <div className="place-order">
        <div className="place-order-left">
          <p>Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='first name' />
            <input type="text" placeholder='last name' />
          </div>
          <input type="text" placeholder='email address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zipcode' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
          <div className="cart-totals">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getCartItemsTotal()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivey Fee</p>
                <p>${getCartItemsTotal()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getCartItemsTotal()===0?0:getCartItemsTotal()+2}</b>
              </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>

  )
}

export default PlaceOrder