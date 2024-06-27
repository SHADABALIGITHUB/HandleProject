import React from 'react'
import {MyTheme} from '../../Context/MyTheme';
import { useContext } from 'react';
const ThemeCard = (props) => {
     
     const {Theme,setTheme} = useContext(MyTheme);
    
  return (

    <div className={`${props.textcolor} w-96 h-96 flex flex-col items-center gap-10 shadow-lg ${props.bgcolor} border ${props.bordercolor} shadow-copy_secondary rounded-2xl p-10`}>  

    <h1 className={`border ${props.bgcolor2} ${props.bordercolor} w-full text-center`}> Navbar </h1>

    <div className={`w-full h-1/2 flex ${props.bgcolor2}`}>
        <div className={`border text-center ${props.bordercolor} w-1/2`}>
                section
        </div>
        <div className={`border text-center ${props.bordercolor} w-1/2`}>
                 aside
        </div>
    </div>
    <div className={`text-center border ${props.bgcolor2} ${props.bordercolor} w-full`}>
             Footer
    </div>
    
    
      
     <button id="btn1" onClick={()=>setTheme(props.value)} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Update Theme</button>
     
     
  </div>

  )
}

export default ThemeCard
