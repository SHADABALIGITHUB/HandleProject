import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import About from './Components/About/About.jsx'
import Login from './Components/Login/Login.jsx'
import ThemeLayout from './Components/Settings/ThemeSettings/ThemeLayout.jsx'
import Register from './Components/Register/Register.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import PageNotFound from './Components/Error/PageNotFound.jsx'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import { Toaster } from 'react-hot-toast'
import Otp from './Components/OTP/Otp.jsx'
import SettingsComponents from './Components/Settings/SettingsComponents/SettingsComponents.jsx'
import Password from './Components/Reset/Password.jsx'
// import AuthProvider from './Context/AuthProvider.jsx'


// import axiosInstance from './lib/axiosInstance.js'
// import Test from './Components/OTP/Test.jsx'

// const isAuthenticated = async ()=>{
//   try {
//     const res = await axiosInstance.get("/auth/status");
//     // console.log(res.data.authenticated);
//     setAuthenticated(res.data.authenticated);
//     // return res.data.authenticated;
//   } catch (error) {
//     // console.log(error);
//     setAuthenticated( error.response.data.authenticated );
//   }
// }
// console.log(await isAuthenticated());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Toaster position="top-center" />

    <BrowserRouter>
      <Routes>

        <Route element={<App />}>

          {/* <Route path='/dashboard' element={isauth? <Dashboard/>:<Navigate to="/login"/>}/> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/settings' element={<><Outlet/></>} >
              <Route path='' element={<SettingsComponents/>}/>
              <Route path='blog' element={<ThemeLayout/>}/>
              <Route path='two' element={<span>Settings 2</span>}/>
           </Route>




        </Route>


        {/* <Route path="/login" element={isAuthenticated?<Navigate to="/dashboard"/>:<Login/>} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset/password" element={<Password />} />
        {/* <Route path="/login" element={isauth?<Navigate to="/dashboard"/>:<Login/>} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/auth/otp" element={<Otp />} />
        <Route path="*" element={<PageNotFound />} />
        {/*<Route path="/testing" element={<Test/>} />*/}

      </Routes>
    </BrowserRouter>





  </React.StrictMode>,
)
