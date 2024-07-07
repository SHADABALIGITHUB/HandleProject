import React from 'react'

const Profile = () => {
  return (
    <div className={`container mx-auto gap-10 p-4 font-serif flex justify-center items-center font-bold text-mytext`}>
        <div className="bg-copy_secondary min-w-[90%] md:min-w-[50%] rounded px-4 md:px-8 pt-6 pb-8 mb-4">
            <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-mytext mb-2">Profile</h1>
            <hr className='border-mytext/50 mb-6'></hr>
            <div className="mb-4">
                <label className="block text-mytext text-sm font-bold mb-2" htmlFor="username">Username</label>
                <input className="shadow appearance-none border bg-copy_primary text-sm rounded w-full py-2 px-3 text-mytext leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required="" />
            </div>
            <div className="mb-4">
                <label className="block text-mytext text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="shadow appearance-none border bg-copy_primary text-sm rounded w-full py-2 px-3 text-mytext leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required="" />
            </div>
            <div className="mb-4">
                <label className="block text-mytext text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input className="shadow appearance-none border bg-copy_primary text-sm rounded w-full py-2 px-3 text-mytext leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required="" />
            </div>
            <div className="mb-4">
                <label className="block text-mytext text-sm font-bold mb-2" htmlFor="confirmpassword">Confirm Password</label>
                <input className="shadow appearance-none border bg-copy_primary text-sm rounded w-full py-2 px-3 text-mytext leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="Confirm Password" required="" />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-btnbackground text-btntext font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">Save</button>

            </div>
            </div>

      
    </div>
  )
}

export default Profile
