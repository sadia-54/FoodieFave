import React, {useState} from 'react'
import { assets } from '@assets/assets'

const LoginModal = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState('Login')

  return (
    <div className='login-modal' >
        <form className='login-modal-container'>
            <div className="login-modal-title">
                <h2>{currentState}</h2>
                <img onClick={()=> setShowLogin(false) } src={assets.cross_icon} alt="" />
            </div>
            <div className="login-modal-input">
              {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
              <input type="email" placeholder='Your Email' required />
              <input type="password" placeholder='Password' required />
            </div>
            <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-modal-condition">
              <input type="checkbox" required />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login"
            ? <p>Create a new account? <span onClick={()=> setCurrentState("Sign Up")} >Click Here</span> </p>
            : <p>Already have an account? <span onClick={()=> setCurrentState("Login")}>Login Here</span></p>
            }
        
        </form>
    </div>
  )
}

export default LoginModal