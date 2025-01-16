import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className="place-order-left w-full max-w-[max(30%, 500px)]">
        <p className='title text-[30px] font-[600] mb-[50px] text-[tomato]'>Delivery Information</p>
        <div className="multi-fields flex gap-[10px] ">
          <input className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato] ' type="text" placeholder='First Name' />
          <input className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Last Name' />
        </div>
        <input className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="email" placeholder='Email Address' />
        <input className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Street' />
        <div className="multi-fields flex gap-[10px]">
          <input className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='City' />
          <input className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='State' />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Zip Code' />
          <input className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Country' />
        </div>
        <input className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right w-full max-w-[max(40%, 500px)]">
        <div className="cart-total flex flex-1 flex-col gap-[20px]">
            <h2 className='font-[550] text-[30px] text-[tomato]'>Cart Totals</h2>
            <div>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>TK. {getTotalCartAmount()}</p>
              </div>
              <hr className='my-[10 px]' />
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>TK. {25}</p>
              </div>
              <hr />
              <div className="cart-total-details flex justify-between text-[#555]">
                <b>Total</b>
                <b>TK. {getTotalCartAmount()+25}</b>
              </div>
            </div>
            <button className='text-white bg-[tomato] w-[max(15vw, 200px)] py-[12 px] rounded-[4 px] cursor-pointer mt-[30px]'>Proceed To Payment</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder