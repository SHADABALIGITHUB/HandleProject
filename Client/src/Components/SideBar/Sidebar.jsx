import { X,LayoutDashboard,FolderGit2 ,CircleUserRound,Trophy,LogOut,Settings,FileClock,MessageCircleQuestion} from 'lucide-react';


import React, { useContext } from 'react'

import {Link} from 'react-router-dom'
import axiosInstance from '../../lib/axiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({sidebarstatus,Opensidebar}) => {
   const navigate = useNavigate();

   const handleClick = async () => {
    try {
      let res = await axiosInstance.get("/auth/logout");
      if(res.data.success===true){
        toast(res.data.message);
        // setIsAuth(false); // Check Login.jsx for the TODO
        // Here I want to set the auth to false so that after logging out I should navigate to login page perfectly otherwise when I am protecting the routes on main.jsx then it is navigating to login route even before the user is unauthenticated due to which the protection provided to the routes(currently commented to prevent errors) are pushing the page to dashboard only because as per it the user is still authenticated.
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
   }

  return (
    <div
  id="drawer-navigation"
  className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto  ${sidebarstatus==false&&"translate-x-full"} transition-transform md:w-64 w-full bg-black`}
>
  <h5
    id="drawer-navigation-label"
    className="text-base font-semibold text-mytext"
  >
    Menu
  </h5>
  <button
    type="button"
    data-drawer-hide="drawer-navigation"
    aria-controls="drawer-navigation"
    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
    onClick={Opensidebar} >
   
  <X />
   
  </button>
  <div className="py-4 overflow-y-auto">
    <ul className="space-y-2 font-medium">
      <li>
        <Link
          to="/dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <LayoutDashboard />
          <span className="ms-3">Dashboard</span>
        </Link>
      </li>
      <li>
        <button
          type="button"
          className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        
        >
          <FolderGit2 />
          <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
           Projects
          </span>
       </button>
        
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <CircleUserRound />
          <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
          {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            Pro
          </span> */}
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Trophy />
          <span className="flex-1 ms-3 whitespace-nowrap">Achivements</span>
         
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <FileClock />
          <span className="flex-1 ms-3 whitespace-nowrap">Watch List</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
         <MessageCircleQuestion />
          <span className="flex-1 ms-3 whitespace-nowrap">Help Desk</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
         <Settings />
          <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <LogOut />
          <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
        </Link>
      </li>
      <li><button className='bg-white text-black' onClick={handleClick}>Sign Out</button></li>
      {/* Improve the UI of this button  */}
    </ul>
  </div>
</div>

  )
}

export default Sidebar
