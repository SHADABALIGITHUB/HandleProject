import { X,LayoutDashboard,FolderGit2 ,CircleUserRound,Trophy,LogOut,Settings,FileClock,MessageCircleQuestion} from 'lucide-react';


import React from 'react'

import {Link} from 'react-router-dom'
import axiosInstance from '../../lib/axiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Auth from '../../Context/Auth';
const Sidebar = ({sidebarstatus,Closesidebar}) => {
   const navigate = useNavigate();
    
    const {isauth,setIsAuth} = useContext(Auth);
   

   const handleClick = async () => {
    try {
      let res = await axiosInstance.get("/auth/logout");
      if(res.data.success===true){
        toast(res.data.message);
        setIsAuth(false);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
   }

  return (
    <div
  id="drawer-navigation"
  className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto font-Google2  ${sidebarstatus==false&&"translate-x-full"} transition-transform md:w-64 w-full bg-background`}
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
    className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center text-mytext hover:bg-copy_primary"
    onClick={Closesidebar} >
   
  <X />
   
  </button>
  <div className="py-4 overflow-y-auto">
    <ul className="space-y-2 font-medium">
      <li>
        <button
          onClick={()=>{
               navigate('/dashboard')
               Closesidebar()
          }}
          className="flex w-full items-center p-2 text-gray-900 rounded-lg text-mytext hover:bg-copy_primary"
        >
          <LayoutDashboard />
          <span className="ms-3">Dashboard</span>
        </button>
      </li>
      <li>
        <button
        
          type="button"
          className="flex items-center w-full p-2 text-base rounded-lg text-mytext hover:bg-copy_primary"
        
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
          className="flex items-center w-full p-2 text-base rounded-lg text-mytext hover:bg-copy_primary"
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
          className="flex items-center w-full p-2 text-base rounded-lg text-mytext hover:bg-copy_primary"
        >
          <Trophy />
          <span className="flex-1 ms-3 whitespace-nowrap">Achivements</span>
         
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center w-full p-2 text-base rounded-lg text-mytext hover:bg-copy_primary"
        >
          <FileClock />
          <span className="flex-1 ms-3 whitespace-nowrap">Watch List</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center w-full p-2 text-base rounded-lg text-mytext hover:bg-copy_primary"
        >
         <MessageCircleQuestion />
          <span className="flex-1 ms-3 whitespace-nowrap">Help Desk</span>
        </Link>
      </li>
      <li>
        <button
          onClick={
            ()=>{
              navigate('/settings/profile')
              Closesidebar()
           }
          }
          className="flex items-center w-full p-2 text-base rounded-lg text-mytext hover:bg-copy_primary"
        >
          <Settings />
          <span className="ms-3">Settings</span>
        </button>
      </li>
      <li>
        <div
           onClick={handleClick}
           className="flex items-center w-full p-2 text-base rounded-lg text-mytext hover:bg-copy_primary"
        >
          <LogOut />
          <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
        </div>
      </li>
      {/* <li><button className='bg-white text-black' >Sign Out</button></li> */}
      {/* Improve the UI of this button  */}
    </ul>
  </div>
</div>

  )
}

export default Sidebar
