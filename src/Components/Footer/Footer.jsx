import React from 'react'
import './footer.css'
import footer_logo from "../Assest/logo_big.png"
import instergram_icons from "../Assest/instagram_icon.png"
import pinterest_icon from "../Assest/pintester_icon.png"
import whatsapp_icon from "../Assest/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-img'>
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>

        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
            
        </ul>

        <div className='footer-social-icons'>
            <div className="footer-icons-containeer">
                <img src={pinterest_icon} alt="" />
            </div>

            <div className="footer-icons-containeer">
                <img src={whatsapp_icon} alt="" />
            </div>

            <div className="footer-icons-containeer">
                <img src={instergram_icons} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer