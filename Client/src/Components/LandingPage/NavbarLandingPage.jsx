import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();

    const redirectLoginRoute=() => {
        navigate('/login');
        
    }
    const redirectRegisterRoute = () => {
        navigate('/register');
    }
   return (
       <div className="container-full flex flex-wrap p-5 flex-col md:flex-row items-center">
           <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
               <img src='Logo.png' className="w-100 h-10 mr-2" alt="Logo" />
               <h2></h2>
           </Link>
           <nav className="md:ml-auto flex gap-2 flex-wrap items-center text-base justify-center">
              
               <button className="rounded px-2 text-xs py-2  md:px-10 md:py-3 text-white  hover:bg-violet-600" onClick={redirectLoginRoute} >Login</button>
               <button className="rounded px-2 text-xs py-2  md:px-10 md:py-3 text-white  hover:bg-violet-600" onClick={redirectRegisterRoute}>Register</button>
           </nav>
           {/* <div className='flex gap-4 mt-4 md:mt-0'>
                 <Search />
                 <CircleUserRound />
           </div> */}
       </div>
   );
}
export default Navbar;