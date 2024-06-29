import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../lib/axiosInstance';
import toast from "react-hot-toast";
// import axios from 'axios';
const Register = () => {

  const [user, setUser] = useState({username:"", email: "", password: "" });
  const navigate = useNavigate()
  const redirecttoLogin = () => {
    navigate('/login')
  }

  const handleClick = async () => {
    try {
      const res = await axiosInstance.post("/auth/signup",user);
      if(res.data.success===true){
        toast.success(res.data.message);
        navigate(`/auth/otp/${user.email}`);
      }
      else{
        toast.error(res.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleOauth = async () => {
    window.open(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/google`,'_self');
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }

  return (
    <div className={`w-screen h-screen flex justify-center items-center bg-slate-700`}>



      <section>
        <div className="flex bg-black text-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8 rounded-2xl">
          <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center" />
            <h2 className="text-center text-2xl font-bold leading-tight">
              <span className='text-purple-500'>Register</span> to Kaisen
            </h2>

            <form
              action="#"
              className="mt-8"
              method="POST"
            >
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Username"
                      type="text"
                      name='username'
                      value={user.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Email"
                      type="email"
                      name='email'
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium ">
                      Password
                    </label>
                    {/* <a
                className="text-sm font-semibold hover:underline"
                href="#"
                title=""
              >
                Forgot password?
              </a> */}
                  </div>

                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Password"
                      type="password"
                      name='password'
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <p className="mt-2 text-center text-sm text-gray-200 cursor-pointer" onClick={redirecttoLogin}>
                  Already have account? Login
                </p>
                <div>
                  <button
                    className="inline-flex  w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-bold leading-7 text-black hover:bg-white/80"
                    type="button"
                    onClick={handleClick}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                type="button"
                onClick={handleOauth}
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Register
