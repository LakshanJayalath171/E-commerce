import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer To Your Email</h1>
      <p>Subscribe To Our Newsletter And Stay Updated</p>

      <div>
        <input type="email" placeholder='Your E-mail Id'/>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Newsletter