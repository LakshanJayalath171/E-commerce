import React from 'react'
import "./Css/login-signup.css"

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-containeer">
        <h1>Sign Up</h1>
        <div className="login-signup-feilds">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email address' />
          <input type="password" name="" id="" placeholder='Password'/>
          
        </div>

        <button>Continue</button>
        <p className='login-signup-login'>Already Have an Account? <span></span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id=''/>
          <p>I Agree to the terms and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup