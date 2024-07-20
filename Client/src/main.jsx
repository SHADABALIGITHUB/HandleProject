import React from 'react'
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
import ResetPassword from './Components/Reset/ResetPassword.jsx'
import ChangeAndConfirmPasswordRedirectPage from './Components/Reset/ChangeAndConfirmPasswordRedirectPage.jsx'
import CreateNewPorject from './Components/Dashboard/ProjectCreation/CreateNewPorject.jsx'
import ProjectDisplay from './Components/Dashboard/ProjectDisplay/ProjectDisplay.jsx'
import Profile from './Components/Dashboard/Profile/Profile.jsx'
import GoogleLogin from './Components/Login/GoogleLogin.jsx'
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
  // <React.StrictMode>
  <>
    <Toaster position="top-center" />
    {/* <Route path="/login" element={isAuthenticated?<Navigate to="/dashboard"/>:<Login/>} /> */}
    {/* <Route path='/dashboard' element={isauth? <Dashboard/>:<Navigate to="/login"/>}/> */}
    {/* <Route path="/login" element={isauth?<Navigate to="/dashboard"/>:<Login/>} /> */}
    {/*<Route path="/testing" element={<Test/>} />*/}

    <BrowserRouter>
      <Routes>

        <Route element={<App />}>


          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/createproject' element={<CreateNewPorject/>} />
          <Route path='/projects/:id' element={<ProjectDisplay/>} />
          <Route path='/profile/:username' element={<Profile/>} />
          <Route path='/about' element={<About />} />
          <Route path='/settings' element={<SettingsComponents />} >
               <Route path='profile' element={<h2> profile of Settings </h2>} />
               <Route path='theme' element={<ThemeLayout />} />
               <Route path='devloper' element={<span> Devloper </span>} />
               <Route path='account' element={<span> Account </span>} />
          </Route>
        </Route>



        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset/password" element={<ResetPassword />} />
        <Route path="/login/:googleid" element={<GoogleLogin/>} />

        <Route path="/reset/:email/:token" element={<ChangeAndConfirmPasswordRedirectPage/>} />

        <Route path="/register" element={<Register />} />
        <Route path="/auth/otp" element={<Otp />} />
        <Route path="*" element={<PageNotFound />} />


      </Routes>
    </BrowserRouter>
  </>




  // </React.StrictMode>,
)
