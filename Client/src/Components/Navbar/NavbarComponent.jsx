import React from 'react'
import { Menu } from 'lucide-react'
// import { useContext } from 'react'
// import Auth from '../../Context/Auth'

import {NavLink} from 'react-router-dom'

const NavbarComponent = ({Name,Opensidebar}) => {
    
   return (
    

<nav className="bg-copy_secondary font-Google2 border-b border-mytext/30">
  <div className="mx-auto flex flex-wrap items-center justify-between p-2 md:p-4">
    
  <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="Logo.png" className="h-8 rounded-full" alt="Kaisen" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-mytext">kaisen</span>
  </div>
  

  <div className="items-center justify-between gap-2 md:flex md:w-auto md:order-1">
    <div className="md:flex flex-col font-medium hidden p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
    
        <NavLink to="/dashboard" className={({isActive})=>`font-bold flex items-center text-sm ${isActive?"text-blue-500 hover:text-mytext/50":"text-mytext hover:bg-blue-500"}rounded-lg`}>Home</NavLink>
        
        <NavLink to="/about" className={({isActive})=>`font-bold flex items-center text-sm ${isActive?"text-blue-500 hover:text-mytext/50":"text-mytext hover:bg-blue-500"}rounded-lg`}>About</NavLink>
     
        <NavLink to="/projects" className={({isActive})=>`font-bold flex items-center text-sm ${isActive?"text-blue-500 hover:text-mytext/50":"text-mytext hover:bg-blue-500"}rounded-lg`}>Projects</NavLink>
     
        <NavLink to="/dashboard" className={({isActive})=>`flex font-bold items-center text-sm ${isActive?"text-blue-500 hover:text-mytext/50":"text-mytext hover:bg-blue-500"}rounded-lg`}>Pricing</NavLink>
     
        <button className="block py-2 px-3 text-mytext rounded md:p-0">Welcome <span className='text-purple-600'>{Name}</span></button>
     </div>
        <div className='py-3 px-3 text-mytext rounded md:p-0 border border-mytext cursor-pointer' onClick={Opensidebar}>
        <Menu/>
        </div>
    </div>
  
  </div>
</nav>

  )
}

export default NavbarComponent
