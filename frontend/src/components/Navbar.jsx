import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector } from 'react-redux'
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  const {currentUser}=useSelector(state=>state.user)
  return (
<div className='bg-slate-200'>
    <div className='flex justify-between items-center max-w-6xl max-auto p-3'>
    <Link to='/'><h1 className='font-bold'>Auth app</h1></Link>
    <ul className='flex gap-3'>
        <Link to='/'>
        <li>home</li>
        </Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/profile'>
          {currentUser?(
  <div className='flex gap-1 items-center justify-between'>
  
  <span>Account</span>
  <FaUser/>
</div>       ):(
            <li>Sign in</li>
          )}
          
       </Link>

     
    </ul>
    </div>
    </div>
  )
}

export default Navbar