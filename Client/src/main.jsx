import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import About from './Components/About/About.jsx'
import Login from './Components/Login/Login.jsx'
import Settings from './Components/Settings/Settings.jsx'
import Register from './Components/Register/Register.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/Error/PageNotFound.jsx'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import { Toaster } from 'react-hot-toast'
import Otp from './Components/OTP/Otp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Toaster position="top-center"/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path='' element={<Dashboard/>} />
          <Route path='about' element={<About/>} />
          <Route path='blog'  element={<Settings/>} />




        </Route>


        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/pasti" element={<LandingPage/>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/auth/otp" element={<Otp/>} />

      </Routes>
    </BrowserRouter>
    </>


  </React.StrictMode>,
)
