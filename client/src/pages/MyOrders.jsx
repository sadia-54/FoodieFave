import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import {assets} from '../assets/assets.js'
import axios from 'axios'

const MyOrders = () => {

    const [data, setData] = useState([])
    const {token, url} = useContext(StoreContext)

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders", {}, {headers: {token}})
        setData(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders()
        }
    },[token])

  return (
    <div className='my-orders my-[50px] mx-[0px] '>
        <h2 className='font-semibold text-xl'>My Orders</h2>
        <div className="container flex flex-col gap-[20px] mt-[30px] ">
            {data.map((order, index)=>{
                return(
                    <div key={index} className="my-orders-order grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-[14px] py-[10px] px-[20px] text-[#454545] border border-[1px] border-solid border-[tomato] ">
                        <img className='w-[50px]' src={assets.parcel_icon} alt="" />
                        <p>
                            {order.items.map((item, index)=> {
                                if(index === order.items.length-1){
                                    return item.name+" X " + item.quantity
                                }
                                else{
                                    return item.name+" X " + item.quantity + ", "
                                }
                            })}
                        </p>
                        <p>Amount: TK {order.amount}.00</p>
                        <p>Items: {order.items.length} </p>
                        <p>
                            <span className='text-[tomato]' >&#x25cf;</span> 
                            <b className='font-medium text-[#454545]' > {order.status} </b>
                        </p>
                        <button className='py-[12px] px-[0px] rounded-[4px] bg-[#ffe1e1] cursor-pointer text-[#454545] ' >Track Order</button>
                       
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default MyOrders