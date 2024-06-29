import React from 'react'
import { useState } from 'react'
import { Menu,CircleX } from 'lucide-react'
import {Link} from 'react-router-dom'
const NavbarComponent = () => {
  //  const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userprofileimage, setUserprofileimage] = useState('vite.svg');
    const ToggleSidebar=()=>{

    }
    
  return (
    

<nav className="bg-copy_secondary font-Google2 border-b">
  <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2 md:p-4">
  <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="Logo.png" className="h-8 rounded-full" alt="FlowbiteLogo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-mytext">kaisen</span>
  </div>

  {/* <div className="flex items-center md:order-2 gap-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-background rounded-full md:me-0">
        
        <img className="w-10 p-1 h-10 rounded-full" src={userprofileimage} alt="user photo" />

      </button> 
      
      

      <div className="z-50 hidden fixed h-screen top-0 right-0 my-4 text-base list-none bg-background rounded-lg shadow" id="user-dropdown">
      <div className="px-4 py-3 flex justify-between items-center">
          <img className="w-10 p-1 h-10 rounded-full" src="./vite.svg" alt="user photo" />
          <CircleX className='text-mytext' />
        </div>
       
      </div>
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" aria-controls="navbar-user" aria-expanded="false">
       
        <Menu />
       
    </button>
  </div> */}


  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
      <li>
        <Link to="/dashboard" className="block py-2 px-3 text-mytext bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Home</Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</Link>
      </li>
      <li>
        <Link to="/blog" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</Link>
      </li>
      <li>
        <Link to="/dashboard" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Pricing</Link>
      </li>
      <li>
        <Link to="*" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default NavbarComponent
