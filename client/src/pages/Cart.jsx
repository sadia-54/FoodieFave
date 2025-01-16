import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div>
      <div className="cart mt-[100px]">
        <div className="cart-items">
          <div className="cart-items-title items-center text-gray-500 text-[max(1vw, 12px)] grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] gap-4">
            <p className='text-[tomato]'>Items</p>
            <p  className='text-[tomato]'>Title</p>
            <p  className='text-[tomato]'>Price</p>
            <p  className='text-[tomato]'>Quantity</p>
            <p className='text-[tomato]'>Total</p>
            <p className='text-[tomato]'>Remove</p>
          </div>
          <br />
          <hr />

          {food_list.map((item, index)=>{
             if(cartItems[item._id]>0)
             {
              return(
                 <div>
                 <div className="cart-items-title cart-items-item my-[10px] text-black items-center text-gray-500 text-[max(1vw, 12px)] grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] gap-4">
                  <img className='w-[50px]' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>TK. {item.price}</p>
                  <p>{cartItems[item._id]} </p>
                  <p>TK. {item.price*cartItems[item._id]}</p>
                  <p className='cursor-pointer' onClick={()=>removeFromCart(item._id)}>X</p>
                 </div>
                 <hr />
                 </div>
              )
             }
          })}
        </div>
        <div className="cart-bottom w-full mt-[80px] flex justify-between gap-[max(12vw, 20px)] md:flex-row max-[750px]:flex-col-reverse"> 
          <div className="cart-total flex flex-1 flex-col gap-[20px]">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>TK. {getTotalCartAmount()}</p>
              </div>
              <hr className='my-[10 px]' />
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>TK. {getTotalCartAmount()===0?0:25}</p>
              </div>
              <hr />
              <div className="cart-total-details flex justify-between text-[#555]">
                <b>Total</b>
                <b>TK. {getTotalCartAmount()===0?0:25+getTotalCartAmount()}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')} className='text-white bg-[tomato] w-[max(15vw, 200px)] py-[12 px] rounded-[4 px] cursor-pointer'>Proceed To Checkout</button>
          </div>
          <div className="cart-promocode flex flex-1 justify-between max-[750px]:justify-start">
            <div>
              <p className='text-[#555]'>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input mt-[10 px] flex justify-between items-center bg-[#eaeaea] rounded-[4 px] ">
                <input type="text" placeholder='promo code' className='bg-transparent outline-none pl-[10px]' />
                <button className='w-[max(10vw, 150px)] py-[12px] px-[5px] bg-black text-white rounded-[4px] '>Submit</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cart