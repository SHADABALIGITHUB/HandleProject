import React,{useContext} from 'react'
import { UserDetails } from '../../../Context/User';
import { Skull } from 'lucide-react';
const ProfileLogoINSettings = () => {
    const { displayName, profilePhoto } = useContext(UserDetails);
     
 
      
  return (
    <div className="flex items-center gap-4">
    {profilePhoto ? (
      <img
        className="w-10 h-10 rounded-full"
        src={profilePhoto}
        alt="profile"
      />
    ) : (
      <span className='rounded-full text-mytext p-2 border border-mytext'> <Skull /></span>
    )}
    <div className="font-medium dark:text-white">
      <div>{displayName?displayName:"Anonymous User"}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Joined in August 2014
      </div>
    </div>
  </div>
  )
}

export default ProfileLogoINSettings
