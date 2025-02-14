import React from 'react'
import { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import {assets} from '../assets/assets.js'
import axios from 'axios'

const Orders = ({url}) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url+'/api/order/list')
    if(response.data.success){
      setOrders(response.data.data)
    }
    else{
      toast.error("Error fetching orders")
    }
  }

  useEffect(()=>{

  }, [])

  return (
    <div className='order add'>
      <h3 className='font-medium text-semibold text-xl'>Order Page</h3>
     
      <div className="order-list">
        {orders.map((order, index)=>{
          <div key={index} className="order-item grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-[30px] border border-1px border-solid border-[tomato] p-[20px] my-[30px] px-[0px] text-[14px] text-[#505050] ">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food font-medium '>
                {order.items.map((item, index)=>{
                  if(index===order.items.length-1){
                    return item.name + " X " + item.quantity
                  }
                  else{
                    return item.name + " X " + item.quantity + ", "
                  }
                })}
                
              </p>
              <p className='order-item-name font-medium mt-[30px] mb-[5px] '>
                {order.address.firstName+" "+order.address.lastName}
              </p>
              <div className="order-item-address mb-[10px] ">
                <p>{order.address.street+", "}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>
                 {order.address.phone}
              </p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>TK {order.amount}</p>
            <select className='bg-[#ffe8e4] border border-1px border-solid border-[tomato] w-[max(10vw, 120px)] p-[10px] outline-none'>
              <option value="Food Processing">Food Processing</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        })}
      </div>

    </div>
  )
}

export default Orders