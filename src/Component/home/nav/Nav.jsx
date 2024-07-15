import React, {useState} from 'react';
import './Nav.css';
import logo from "../../../../imagess/logo.svg"
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [menu, setMenu] = useState(false)
  function handleToggle (){
    setMenu(!menu)
  }
  return (
    <>
         <nav className='container'>
           <div className='nav-image'>
            <div>
              <img className='img-logo' src={logo} alt="logo" />
            </div>
           <ul className='ul'>
             <li>Features</li>
             <li>Pricing</li>
             <li>Resources</li>
           </ul>
           <button onClick={handleToggle} className='btn1'>{menu ? <IoMdClose/> : <IoMenuSharp/>  } </button>
           </div>
           <div className='login'>
             <p>Login</p>
             <button className='btn1'>Sign Up</button>
           </div> 
           {menu && (<ul className='li'>
             <li>Features</li>
             <li>Pricing</li>
             <li>Resources</li>
           </ul>)}
         </nav>
    
    </>
  )
}

export default Nav