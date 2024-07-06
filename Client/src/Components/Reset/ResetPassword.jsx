import React, { useEffect, useState } from 'react'
import axiosInstance from '../../lib/axiosInstance';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [isverified, setIsVerified] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClickToVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/resetpassword/verify", { email });

      if (res.data.success) {
        setMessage(res.data.message);
        setIsVerified(true);
      }
    } catch (error) {
      setIsVerified(false);
      console.log(error);
      if(error.response.data.error){
        setMessage(error.response.data.error);
      }
      else{
        setMessage(error.message);
      }
    }
  }





  // const handleClickToProceed = async () => {
  //     try {
  //         if(password!==confirmPass){
  //             toast.error("Password does not match");
  //             return;
  //         } 
  //         const res = await axiosInstance.patch("/auth/reset/password",{email,password});
  //         if(res.data.success){
  //             toast(res.data.message);
  //             navigate("/login");
  //         }

  //     } catch (error) {
  //         console.log(error);
  //         toast(error.response.data.error);
  //     }
  // }

  // const handleConfirmPass = (e) => {
  //     setConfirmPass(e.target.value);
  //     if(e.target.value != password){
  //         setIsSame(false);
  //     }
  //     else{
  //         setIsSame(true);
  //     }
  // }
  return (
    <div className="flex font-Google2  flex-col items-center bg-gradient-to-r from-gray-900 via-slate-700 to-zinc-900 justify-center h-screen dark">
      <div className="w-full md:max-w-lg max-w-sm  bg-gray-800 rounded-lg shadow-md md:p-6 p-4 m-4">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 flex justify-center items-center">
          <img className="w-10 h-10" src="Logo.png" alt="Kaisen" />  Reset Password
        </h2>
        <form className="flex flex-col">
          <div className='flex flex-col m-0 p-0'>
            <input
              placeholder="Enter your email address"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={`${isverified ? "text-green-500 block" : !isverified ? "text-red-600 block" : "hidden"} pl-4`}> {message}</span>
          </div>
          <button
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150"
            // type="submit"
            onClick={handleClickToVerify}
          >
            Verify
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <a className="text-sm text-gray-400 hover:underline" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
