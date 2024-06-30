import { X,LayoutDashboard,FolderGit2 ,CircleUserRound,Trophy,LogOut,Settings,FileClock,MessageCircleQuestion} from 'lucide-react';
import React from 'react'

import {Link} from 'react-router-dom'
const Sidebar = ({sidebarstatus,Opensidebar}) => {
   
   

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
    </ul>
  </div>
</div>

  )
}

export default Sidebar
