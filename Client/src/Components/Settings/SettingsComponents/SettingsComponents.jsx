import React from 'react'
import SettingsNavigation from './SettingsNavigation'
import { Outlet } from 'react-router-dom';

import ProfileLogoINSettings from './ProfileLogoINSettings';
const SettingsComponents = () => {


  return (
    <div id="Settings" className='container w-max-[80%] mx-auto pl-2 pr-2 md:pl-20 md:pr-20 font-Google2'>


      <div className='p-1 sm:p-4 md:p-10 flex md:flex-row flex-col w-full gap-2 md:gap-0 justify-between items-center'>

        <ProfileLogoINSettings />
        
        <button className="max-w-28 relative h-8 items-center justify-center mb-1 me-1 overflow-hidden text-sm  text-mytext rounded-lg group bg-btnbackground">
          <span className="px-1.5 mx-0.5 py-1 transition-all ease-in duration-75 bg-background hover:bg-transparent rounded-md group-hover:bg-opacity-0">
          Sharable Profile
          </span>
        </button>
      </div>

      <hr />



      <div className='flex'>
       <SettingsNavigation/>
       <div className='w-4/5 flex p-4 justify-center text-mytext'>

       <Outlet/>

       </div>

         {/* <CurrentSettings/> */}

      </div>








    </div>
  )
}

export default SettingsComponents
