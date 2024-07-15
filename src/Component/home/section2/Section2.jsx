import React from 'react'
import "./Section2.css"
import brand from "../../../../imagess/icon-brand-recognition.svg"
import detailed from "../../../../imagess/icon-detailed-records.svg"
import customizable from "../../../../imagess/icon-fully-customizable.svg"

function Section2() {
  return (
    <>
     <div className='section2'>
        <div className='section2-heading-text'>
           <h3>Advanced Statistics</h3>
           <p>Track how your links are performing across the web with our 
           advanced statistics dashboard.</p> 
        </div>
        <div className='section2-contents'>
            <div className='recognition'>
               <img src={brand} alt="" />
               <h3>Brand Recognition</h3>
               <p>Boost your brand recognition with each click. Generic links don’t 
               mean a thing. Branded links help instil confidence in your content.</p> 
            </div>
            <div className='records'>
               <img src={detailed} alt="" />
               <h3>Detailed Records</h3>
               <p>Gain insights into who is clicking your links. Knowing when and where 
               people engage with your content helps inform better decisions.</p> 
            </div>
            <div className='customizable'>
               <img src={customizable} alt="" />
               <h3>Fully Customizable</h3>
               <p>Improve brand awareness and content discoverability through customizable 
               links, supercharging audience engagement.</p> 
            </div>
        </div>
     </div>
    </>
  )
}

export default Section2