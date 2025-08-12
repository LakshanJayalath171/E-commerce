import React from 'react'
import "./hero.css"
import hand_icon from "../Assest/hand_icon.png"
import arrow_icon from "../Assest/arrow.png"
import hero_image from "../Assest/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className='hero-hand-icon'>
                <p>New</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>For Everyone</p>

             <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>

        
        <div className="hero_right">
            <img src={hero_image} alt="" />
        </div>

       
    </div>
  )
}

export default Hero