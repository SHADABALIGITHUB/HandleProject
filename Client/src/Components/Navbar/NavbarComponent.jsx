import React from 'react'
import { Menu } from 'lucide-react'
// import { useContext } from 'react'
// import Auth from '../../Context/Auth'

import {NavLink} from 'react-router-dom'
const NavbarComponent = ({Name,Opensidebar}) => {
    
   return (
    

<nav className="bg-copy_secondary font-Google2 border-b">
  <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2 md:p-4">
  <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="./Logo.png" className="h-8 rounded-full" alt="FlowbiteLogo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-mytext">kaisen</span>
  </div>

  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
      <li>
        <NavLink to="/dashboard" className="block py-2 px-3 text-mytext bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Pricing</NavLink>
      </li>
      <li>
        <button className="block py-2 px-3 text-mytext rounded md:p-0">Welcome <span className='text-purple-600'>{Name}</span></button>
      </li>
      <li>

         <div className='block py-2 px-3 text-mytext rounded md:p-0' onClick={Opensidebar}>
             <Menu/>
         </div>
        
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default NavbarComponent
