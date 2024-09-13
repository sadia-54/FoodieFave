import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur necessitatibus maiores quisquam et? Eius, temporibus atque? Amet nobis omnis excepturi ipsa odio soluta. Id quas nemo impedit, consectetur sed ex?</p>

         <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
          </div> 
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>Home</ul>
          <ul>About Us</ul>
          <ul>Delivery</ul>
          <ul>Privacy Policy</ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+8801792530122</li>
            <li>foodiefave@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © FoodieFave.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer