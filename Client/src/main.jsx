import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import About from './Components/About/About.jsx'
import Login from './Components/Login/Login.jsx'
import Settings from './Components/Settings/Settings.jsx'
import Register from './Components/Register/Register.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import PageNotFound from './Components/Error/PageNotFound.jsx'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import { Toaster } from 'react-hot-toast'
import Otp from './Components/OTP/Otp.jsx'
import axiosInstance from './lib/axiosInstance.js'
// import Test from './Components/OTP/Test.jsx'

const isAuthenticated = async ()=>{
  try {
    const res = await axiosInstance.get("/auth/status");
    return res.data.authenticated;
  } catch (error) {
    console.log(error);
  }
}
// console.log(await isAuthenticated());
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Toaster position="top-center"/>
    <BrowserRouter>
      <Routes>

         <Route element={<App />}>

          
          <Route path='/dashboard' element={await isAuthenticated() ? <Dashboard/>:<Navigate to="/login"/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Settings/>} />




        </Route>


        {/* <Route path="/login" element={isAuthenticated?<Navigate to="/dashboard"/>:<Login/>} /> */}
        <Route path="/" element={await isAuthenticated()?<Navigate to="/dashboard"/>:<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/auth/otp" element={<Otp/>} />
        <Route path="*" element={<PageNotFound/>} />
        {/*<Route path="/testing" element={<Test/>} />*/}

      </Routes>
    </BrowserRouter>
    </>


  </React.StrictMode>,
)
