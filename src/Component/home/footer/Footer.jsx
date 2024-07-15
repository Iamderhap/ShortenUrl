import React from 'react'
import logo from "../../../../imagess/logo.svg"
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





function Footer() {
  return (
    <>
    <section className='footer-heading'>
     <div className='footer'>
        <h3>Boost your links today</h3>
        <button>Get Started</button>
      </div>
    </section>
     <footer>
        <img className='img' src={logo} alt="" />
        <div>
           <div>
           <h4>Features</h4>
        </div> 
           <div className='features'>
             <p>Link Shortening</p>
             <p>Branded Links</p>
             <p>Analytics</p>
           </div>
        </div>
        <div>
           <div>
           <h4>RESOURCES</h4>
        </div> 
           <div className='resources'>
             <p>Blog</p>
             <p>Developers</p>
             <p>Support</p>
           </div>
        </div>
        <div className='company-div'>
           <div>
           <h4>COMPANY</h4>
        </div> 
           <div className='company'>
             <p>About</p>
             <p>Our Team</p>
             <p>Careers</p>
             <p>Contact</p>
           </div>
        </div>
        <div>
           <div className='image-icon'>
             <p><FaFacebookSquare /></p>
             <p><SlSocialTwitter /></p>
             <p><FaPinterest /></p>
             <p><FaInstagram /></p>
           </div>
        </div>
     </footer>
    </>
  )
}

export default Footer