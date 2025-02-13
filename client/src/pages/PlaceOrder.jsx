import React, { useEffect, useState } from 'react'
import { useContext, useNavigate } from 'react'
import { StoreContext } from '../context/StoreContext.jsx';
import axios from 'axios';

const PlaceOrder = () => {

  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data, [name]:value}))
  }

  // useEffect(()=>{
  //   console.log(data)
    
  // }, [data])

  const placeOrder = async (event) => {
    event.preventDefault()
    let orderItems = []
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount()+100
    }
    let response = await axios.post(url+"/api/order/place", orderData, {headers: {token}})
    if(response.data.success){
      // session url = response.data
      window.location.replace(session_url)
    }
    else{
      alert("Error")
    }
  }

  const navigate = useNavigate()

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')

    }

  }, [token])

  return (
    <form onSubmit={placeOrder} className='place-order flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className="place-order-left w-full max-w-[max(30%, 500px)]">
        <p className='title text-[30px] font-[600] mb-[50px] text-[tomato]'>Delivery Information</p>
        <div className="multi-fields flex gap-[10px] ">
          < input required name='firstName' value={data.firstName} onChange={onChangeHandler} className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato] ' type="text" placeholder='First Name' />
          < input required name='lastName' value={data.lastName} onChange={onChangeHandler} className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Last Name' />
        </div>
        < input required name='email' value={data.email} onChange={onChangeHandler} className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="email" placeholder='Email Address' />
        < input required name='street' value={data.street} onChange={onChangeHandler} className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Street' />
        <div className="multi-fields flex gap-[10px]">
          < input required name='city' value={data.city} onChange={onChangeHandler} className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='City' />
          < input required name='state' value={data.state} onChange={onChangeHandler} className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='State' />
        </div>
        <div className="multi-fields flex gap-[10px]">
          < input required name='zipcode' value={data.zipcode} onChange={onChangeHandler} className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Zip Code' />
          < input required name='country' value={data.country} onChange={onChangeHandler} className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Country' />
        </div>
        < input required name='phone' value={data.phone} onChange={onChangeHandler} className='border border-[#c5c5c5] mb-[15px] w-full p-[10px] rounder-[4px] outline-[tomato]' type="text" placeholder='Phone' />
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
                <p>TK. {getTotalCartAmount()===0?0:25}</p>
              </div>
              <hr />
              <div className="cart-total-details flex justify-between text-[#555]">
                <b>Total</b>
                <b>TK. {getTotalCartAmount()===0?0:25+getTotalCartAmount()}</b>
              </div>
            </div>
            <button type='submit' className='text-white bg-[tomato] w-[max(15vw, 200px)] py-[12 px] rounded-[4 px] cursor-pointer mt-[30px]'>Proceed To Payment</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder