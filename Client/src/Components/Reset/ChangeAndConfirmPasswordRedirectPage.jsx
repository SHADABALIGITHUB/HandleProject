import React,{useState} from 'react'

const ChangeAndConfirmPasswordRedirectPage = () => {
    //  email from user data api
    const [email,setEmail] = useState("mohitNegi@gmail.com");

        

  return (
    <div className="flex font-Google2  flex-col items-center bg-gradient-to-r from-gray-900 via-slate-700 to-zinc-900 justify-center h-screen dark">
    <div className="w-full md:max-w-lg max-w-sm  bg-gray-800 rounded-lg shadow-md md:p-6 p-4 m-4">
      <h2 className="text-2xl font-bold text-gray-200 mb-4 flex justify-center items-center">
         <img  className="w-10 h-10" src="Logo.png" alt="Kaisen" />  Reset Password 
      </h2>
      <form className="flex flex-col">
       
        <input
          placeholder="Enter your email address"
          className="bg-gray-700 text-gray-200 mb-4 border-0 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="email"
          value={email}
          readOnly
          
        />
        <input
          placeholder="Enter New Password"
          className="bg-gray-700 text-gray-200 mb-4 border-0 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          />
          <input
          placeholder="Confirm Password"
          className="bg-gray-700 text-gray-200 border-0 mb-4 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          />

      
       
        <button
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150"
          type="submit"
        //   onClick={}
        >
            Change Password
        </button>
      </form>
      <div className="flex justify-center mt-4">
        <a className="text-xs text-gray-400 hover:underline" href="#">
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
  )
}

export default ChangeAndConfirmPasswordRedirectPage
