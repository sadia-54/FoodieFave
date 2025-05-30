import React, {useContext, useState} from 'react'
import { assets } from '@assets/assets'
import { StoreContext } from '../context/StoreContext.jsx'
import axios from 'axios'

const LoginModal = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext)
    const [currentState, setCurrentState] = useState('Login')
    const [data, setData] = useState({
      name: "", 
      email: "",
      password: ""
    })

    const onChangeHandler = (event) => { 
      const name = event.target.name
      const value = event.target.value
      setData({...data, [name]: value})
    }

    // to check updated data in browser console from input fields
    // useEffect(()=>{
    //   console.log(data); 
    // }, [data])

    const onLogin = async (event) => {

      event.preventDefault()
      let newUrl = url
      if(currentState==='Login'){
        newUrl += '/api/user/login'
      }
      else{
        newUrl += '/api/user/register'
      }

      try {
      const response = await axios.post(newUrl, data)

      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }
    } catch (error) {
      console.error("Registration/Login failed:", error);
      alert(error.response?.data?.message || "Server error occurred.");
    }
    }

  return (
    <div className='login-modal absolute z-[1] w-full h-full bg-[#00000090] grid' >
        <form onSubmit={onLogin} className='login-modal-container place-self-center w-[max(23vw, 330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-sm' >
            <div className="login-modal-title text-[tomato] font-semibold flex flex-row justify-between items-center">
                <h2>{currentState}</h2>
                <img onClick={()=> setShowLogin(false) } src={assets.cross_icon} alt="" className='w-[16px] cursor-pointer' />
            </div>
            <div className="login-modal-input flex flex-col gap-[10px]">
              {currentState==="Login"?<></>
              :<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required className="border border-gray-300 rounded px-4 py-2"/>}
              <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required className="border border-gray-300 rounded px-4 py-2"/>
              <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required className="border border-gray-300 rounded px-4 py-2"/>
            </div>
            <button type='submit' className="border border-gray-300 rounded px-4 py-2 bg-[tomato] text-white">{currentState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-modal-condition flex items-start gap-[8px] mt-[-8px]">
              <input type="checkbox" required className='mt-[5px] cursor-pointer' />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login"
            ? <p>Create a new account? <span onClick={()=> setCurrentState("Sign Up")} className='cursor-pointer text-[tomato] font-medium' >Click Here</span> </p>
            : <p>Already have an account? <span onClick={()=> setCurrentState("Login")} className='cursor-pointer text-[tomato] font-medium' >Login Here</span></p>
            }
        
        </form>
    </div>
  )
}

export default LoginModal