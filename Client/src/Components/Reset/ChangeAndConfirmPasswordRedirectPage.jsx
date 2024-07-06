import React, { useState } from 'react'
import axiosInstance from '../../lib/axiosInstance';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ChangeAndConfirmPasswordRedirectPage = () => {
  //  email from user data api
  const { email } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isSame, setIsSame] = useState(true);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPass) {
        toast.error("Password does not match");
        return;
      }
      const res = await axiosInstance.patch("/auth/reset/password", { email, password });
      if(res.data.success){
        toast(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast(error.response.data.error);
    }
  }

  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
    if (e.target.value != password) {
      setIsSame(false);
    }
    else {
      setIsSame(true);
    }
  }

  return (
    <div className="flex font-Google2  flex-col items-center bg-gradient-to-r from-gray-900 via-slate-700 to-zinc-900 justify-center h-screen dark">
      <div className="w-full md:max-w-lg max-w-sm  bg-gray-800 rounded-lg shadow-md md:p-6 p-4 m-4">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 flex justify-center items-center">
          <img className="w-10 h-10" src="Logo.png" alt="Kaisen" />  Reset Password
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            className="bg-gray-700 text-gray-200 border-0 mb-4 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={confirmPass}
            onChange={handleConfirmPass}
          />



          <button
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
            onClick={handleClick}
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
