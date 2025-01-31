import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    // console.log(response.data)
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error fetching list")
    }
  }

  useEffect(()=>{
    fetchList()
  }, [])

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
    await fetchList()
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }


  return (
    <div className='list flex flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title bg-[#f9f9f9] grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[20px] py-[12px] px-[15px] border border-[1px] border-solid border-[#cacaca] text-[13px]
    md:grid-cols-[1fr_3fr_1fr] md:gap-[15px] 
max-md:hidden ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index)=>{
          return(
            <div key={index} className="list-table-format  grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[20px] py-[12px] px-[15px] border border-[1px] border-solid border-[#cacaca] text-[13px]
           md:grid-cols-[1fr_3fr_1fr] md:gap-[15px] 
max-md:hidden">
              <img className='w-[50px]' src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>TK. {item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor-pointer ' >X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List