import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {
  console.log("URL:", url)


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
    <div className="list flex flex-col p-4">
      <p className="text-xl font-semibold mb-4">All Foods List</p>
  
      <div className="list-table overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="list-table-format title bg-[#f9f9f9] grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[20px] py-[12px] px-[15px] border border-[1px] border-solid border-[#cacaca] text-[13px]">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
  
          {list.length === 0 ? (
            <div className="text-center py-5 text-gray-500">No food items found.</div>
          ) : (
            list.map((item, index) => (
              <div
                key={index}
                className="list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[20px] py-[12px] px-[15px] border border-[1px] border-solid border-[#cacaca] text-[13px]"
              >
                <img className="w-[50px] h-[50px] object-cover" src={`${url}/images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>TK. {item.price}</p>
                <p
                  onClick={() => removeFood(item._id)}
                  className="cursor-pointer text-red-500 font-bold hover:underline"
                >
                  X
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
  
}

export default List