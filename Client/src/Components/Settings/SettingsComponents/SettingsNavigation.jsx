import React from 'react'
import { NavLink } from 'react-router-dom'
import { CircleUserRound,Palette,Settings,Bug } from 'lucide-react'
const SettingsNavigation = () => {
  return (

    <div className='w-1/5'>


        <div className='flex flex-col gap-2'>

            <NavLink to="/settings"
            className={({isActive})=>`flex items-center just w-full p-2 text-base ${isActive?"bg-btnbackground text-btntext hover:bg-green-950":"text-mytext hover:bg-copy_primary"} rounded-lg`}
            
        
            >
            <span className='flex gap-2'>
            <CircleUserRound />
              profile
            </span>


            </NavLink>

            <NavLink to="/settings/blog"
            className={({isActive})=>`flex items-center just w-full p-2 text-base ${isActive?"bg-btnbackground text-btntext hover:bg-green-950":"text-mytext hover:bg-copy_primary"} rounded-lg`}
            
            
            >
            <span className='flex gap-2'>
            <Palette />
              Change Theme
            </span>


            </NavLink>

            <NavLink to="/settings/blog"
            className={({isActive})=>`flex items-center just w-full p-2 text-base ${isActive?"bg-btnbackground text-btntext hover:bg-green-950":"text-mytext hover:bg-copy_primary"} rounded-lg`}
            
            
            >
            <span className='flex gap-2'>
            <Bug />
            Devlopers
            </span>


            </NavLink>

            <NavLink to="/settings/blog"
            className={({isActive})=>`flex items-center just w-full p-2 text-base ${isActive?"bg-btnbackground text-btntext hover:bg-green-950":"text-mytext hover:bg-copy_primary"} rounded-lg`}
            
            
            >
            <span className='flex gap-2'>
            <Settings />
             Account
            </span>


            </NavLink>



       </div>





      
    </div>
  )
}

export default SettingsNavigation
