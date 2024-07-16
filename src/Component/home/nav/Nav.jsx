import React, {useState} from 'react';
import './Nav.css';
import logo from "../../../../imagess/logo.svg"
import { FaOutdent } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [menu, setMenu] = useState(false)
  function handleToggle (){
    setMenu(!menu)
  }
  return (
    <>
         <nav className='container max-sm:flex max-sm:gap-[20px]'>
           <div className='nav-image'>
            <div>
              <img className='img-logo' src={logo} alt="logo" />
            </div>
           <div className='happy'>
           <ul className='ul'>
             <li>Features</li>
             <li>Pricing</li>
             <li>Resources</li>
           </ul>
           <div className='login'>
             <p>Login</p>
             <button className='btn1'>Sign Up</button>
           </div> 
           </div>
           </div>
           <button onClick={handleToggle} className='btn1'>{menu ? <IoMdClose/> : <FaOutdent/>  } </button>
         </nav>
           {menu && (<ul className='li'>
             <li>Features</li>
             <li>Pricing</li>
             <li>Resources</li>
             <li>Sign Up</li>
           </ul>)}
    
    </>
  )
}

export default Nav