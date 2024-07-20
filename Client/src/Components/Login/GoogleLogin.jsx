import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axiosInstance';
import toast from "react-hot-toast";
import { Eye, EyeOff } from 'lucide-react';

const GoogleLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [border, setBorder] = useState('border-gray-300 focus:border-gray-400 focus:ring-gray-400');
  const [message, setMessage] = useState('');
  const [debouncedUsername, setDebouncedUsername] = useState('');

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle password change
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  // Debounce username input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedUsername(username);
    }, 500); // Adjust debounce delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [username]);

  // Check username availability
  useEffect(() => {
    const checkUsername = async () => {
      if (debouncedUsername.length > 0) {
        try {
          const res = await axiosInstance.post("/username/check", { username: debouncedUsername });
          if (res.data.message === 'Username already taken') {
            setBorder('border-red-300 focus:border-red-400 focus:ring-red-400');
            setMessage(res.data.message);
          } else if (res.data.message === 'Username available') {
            setBorder('border-green-300 focus:border-green-400 focus:ring-green-400');
            setMessage(res.data.message);
          } else {
            setBorder('border-red-300 focus:border-red-400 focus:ring-red-400');
            setMessage(res.data.message);
          }
        } catch (error) {
          toast.error("Internal server error");
        }
      } else {
        setBorder('border-gray-300');
        setMessage('');
      }
    };

    checkUsername();
  }, [debouncedUsername]);

  // Fetch user email on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get("/auth/status");
        setEmail(res.data.user.email);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  // Handle form submission
  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axiosInstance.post("/auth/signup", { username, password });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/dashboard');
      } else {
        toast.error(res.data.message || res.data.error);
      }
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  return (
    <div className='font-Google2 w-screen h-screen bg-gradient-to-tr to-zinc-600 from-slate-950 flex justify-center items-center'>
      <form className="max-w-screen-4xl mx-auto bg-white text-black m-2 md:p-10 p-2 rounded-2xl">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input
            type="email"
            id="email"
            className={`shadow-sm bg-gray-50 border block w-full p-2.5 ${email ? 'border-green-300 focus:border-green-400 focus:ring-green-400 focus:outline-none' : 'border-gray-300'}`}
            placeholder="KaisenCoder"
            name='email'
            value={email}
            autoComplete='email'
            readOnly
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
          <input
            type="text"
            id="username"
            className={`shadow-sm bg-gray-50 border focus:outline-none block w-full p-2.5 ${!username ? 'border-gray-300' : border}`}
            placeholder="KaisenCoder"
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
          <span className='text-xs pl-2'>{message}</span>
        </div>
        <div className="mb-5 relative">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 block w-full p-2.5"
            name="password"
            value={password}
            onChange={passwordChange}
            autoComplete="current-password"
            required
          />
          <span
            className="absolute text-xs text-gray-900 dark:text-gray-300 right-3 top-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </span>
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start My Journey
        </button>
      </form>
    </div>
  );
};

export default GoogleLogin;
