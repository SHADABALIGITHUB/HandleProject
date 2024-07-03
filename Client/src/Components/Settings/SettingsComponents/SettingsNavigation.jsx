import React from 'react'
import { NavLink } from 'react-router-dom'
import { CircleUserRound,Palette,Settings,Bug } from 'lucide-react'
const SettingsNavigation = () => {
  return (

    <div className='w-1/6'>


        <div className='flex flex-col gap-2'>

            <NavLink to="/settings/profile"
            className={({isActive})=>`flex border border-mytext/50 items-center m-1 w-full text-sm ${isActive?"bg-btnbackground text-btntext hover:bg-copy_primary ":"text-mytext hover:bg-copy_primary"} rounded-lg`}
            
        
            >
            <span className='flex gap-2 p-1'>
            <CircleUserRound />
            <span className='hidden sm:block'> profile  </span>
            </span>


            </NavLink>

            <NavLink to="/settings/theme"
            className={({isActive})=>`flex border border-mytext/50 items-center m-1 w-full text-sm ${isActive?"bg-btnbackground text-btntext hover:bg-copy_primary":"text-mytext hover:bg-copy_primary"} rounded-lg`}
            
            
            >
            <span className='flex gap-2 p-1'>
            <Palette />
            <span className='hidden sm:block'> Change Theme </span>
            </span>


            </NavLink>

            <NavLink to="/settings/devloper"
            className={({isActive})=>`flex border border-mytext/50 items-center m-1 just w-full text-sm ${isActive?"bg-btnbackground text-btntext hover:bg-copy_primary":"text-mytext hover:bg-copy_primary"} rounded-lg`}
            
            
            >
            <span className='flex gap-2 p-1'>
            <Bug />
           <span className='hidden sm:block'> Devlopers</span>
            </span>


            </NavLink>

            <NavLink to="/settings/account"
            className={({isActive})=>`flex border border-mytext/50 items-center m-1 just w-full text-sm ${isActive?"bg-btnbackground text-btntext hover:bg-copy_primary":"text-mytext hover:bg-copy_primary"} rounded-lg`}
            
            
            >
            <span className='flex gap-2 p-1'>
            <Settings />
            <span className='hidden sm:block'> Account </span>
            </span>


            </NavLink>



       </div>





      
    </div>
  )
}

export default SettingsNavigation
