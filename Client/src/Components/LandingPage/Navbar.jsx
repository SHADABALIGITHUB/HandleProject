import React from 'react';
import {Search} from 'lucide-react';
import {CircleUserRound} from 'lucide-react';


function Navbar() {
   return (
       <div className="container-full flex flex-wrap p-5 flex-col md:flex-row items-center">
           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
               <img src='Logo.png' className="w-100 h-10 mr-2" alt="Logo" />
               <h2></h2>
           </a>
           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
               <a className="text-base mr-5 hover:text-gray-900">Home</a>
               <a className="text-base mr-5 hover:text-gray-900">Story</a>
               <a className="text-base mr-5 hover:text-gray-900">Gallery</a>
               <a className="text-base mr-5 hover:text-gray-900">Contact Us</a>
           </nav>
           <div className='flex gap-4 mt-4 md:mt-0'>
                 <Search />
                 <CircleUserRound />
           </div>
       </div>
   );
}
export default Navbar;