import React from 'react'
import "./Header.css"
import illustration from '../../../../imagess/illustration-working.svg'

function Header() {
  return (
    <>
      <section className='main-header'>
         <div className='header-text'>
            <h1>More than just shorter links</h1> 
            <p>Build your brand’s recognition and get detailed insights 
            on how your links are performing.</p>
            <button className='btn2'>Get Started</button>
         </div>
            <img className='header-img' src={illustration} alt="illustration-working" />
      </section>
    </>
  )
}

export default Header