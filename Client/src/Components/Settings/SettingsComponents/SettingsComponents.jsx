import React from 'react'
import SettingsNavigation from './SettingsNavigation'
import { Outlet } from 'react-router-dom';


import ProfileLogoINSettings from './ProfileLogoINSettings';
const SettingsComponents = () => {


  return (
    <div id="Settings" className='container w-max-[80%] mx-auto pl-2 pr-2 md:pl-20 md:pr-20 font-Google2'>


      <div className='p-1 sm:p-4 md:p-10 flex md:flex-row flex-col w-full gap-2 md:gap-0 justify-between items-center'>

        <ProfileLogoINSettings />
        
        <button className="max-w-28 p-2 relative flex text-btntext h-8 items-center justify-center overflow-hidden text-sm rounded-lg bg-btnbackground">
          
          Sharable Profile
         
        </button>
      </div>




      <div className='flex'>
       <SettingsNavigation/>

       <div className='w-5/6 flex p-4 justify-center text-mytext'>

       <Outlet/>

       </div>

         {/* <CurrentSettings/> */}

      </div>








    </div>
  )
}

export default SettingsComponents
