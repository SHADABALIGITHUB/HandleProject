import React, { useState } from 'react'
import style from './otp.module.css'
import axiosInstance from '../../lib/axiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Otp = () => {

  const navigate = useNavigate();
  const [otp,setOtp] = useState('');
  const handleChange = (e) => {
    setOtp(e.target.value);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/verify",{otp});
      if(res.data.success===true){
        toast.success("Verification successfull. Please login to your account");
        navigate("/login");
      }
      else{
        toast.error(res.data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  }
 
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <form className={`${style.form} font-Google2 w-48 h-48 md:w-80 md:h-80`}>
  <div className={style.content}>
    <p align="center">OTP Verification</p>
    <div className={style.inp}>

      <input placeholder="" type="text" className={style.input} maxLength={6} onChange={handleChange}/>
      
    </div>
    <button onClick={handleClick}>Verify</button>
    <svg
      className={style.svg}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#4073ff"
        d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z"
        transform="translate(100 100)"
        className={style.path}
      />
    </svg>
  </div>
</form>
      
    </div>
  )
}

export default Otp
