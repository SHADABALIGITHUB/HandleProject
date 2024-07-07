import React from 'react'
import ProfilePersonalInformation from './ProfilePersonalInformation'
import ProfileReadmeFile from './ProfileReadmeFile'


const Profile = () => {
    return (
        <div className={`container mx-auto gap-10 p-4 font-serif flex justify-center items-center font-bold text-mytext`}>
            <div className="bg-copy_secondary min-w-[90%] md:min-w-[50%] rounded px-4 md:px-8 pt-6 pb-8 mb-4">
                <ProfilePersonalInformation />

                <ProfileReadmeFile />




                
                   
                </div>

            </div>


       
    )
}

export default Profile
