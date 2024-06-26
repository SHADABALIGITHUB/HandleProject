import React from 'react'
import { Menu,CircleX } from 'lucide-react'
const NavbarComponent = () => {
  
  

  return (
    

<nav className="bg-copy_secondary border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="Logo.png" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-mytext">Navbar</span>
  </div>
  <div className="flex items-center md:order-2 gap-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-background rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-10 p-1 h-10 rounded-full" src="./vite.svg" alt="user photo" />

      </button>

      <div className="z-50 fixed hidden h-screen top-0 right-0 my-4 text-base list-none bg-background rounded-lg shadow" id="user-dropdown">
      <div className="px-4 py-3 flex justify-between items-center">
          <img className="w-10 p-1 h-10 rounded-full" src="./vite.svg" alt="user photo" />
          <CircleX className='text-mytext' />
        </div>
        <div className="px-4 py-3">
          <span className="block text-sm text-mytext ">Bonnie Green</span>
          <span className="block text-sm text-mytext">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-mytext ">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-mytext ">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-mytext ">functionality</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-mytext ">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 " aria-controls="navbar-user" aria-expanded="false">
       
        <Menu />
       
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <a href="#" className="block py-2 px-3 text-mytext bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-mytext rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default NavbarComponent
