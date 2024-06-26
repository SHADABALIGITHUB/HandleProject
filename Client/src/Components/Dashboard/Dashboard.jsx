import React, { useContext } from 'react'
import { useState } from 'react'
import { MyTheme } from '../../Context/MyTheme'

const Dashboard = () => {

const {Theme,setTheme} = useContext(MyTheme);
 


  return (
    <div className={`${Theme} container mx-auto flex-wrap gap-10 p-4 font-serif flex justify-center items-center font-bold text-black bg-gradient-to-r from-background to-copy_primary`}>
    
    <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
      <h1 className="text-3xl text-mytext text-center">Hello World
      <p> welcome To Testnig TailwindCss </p>
      </h1>
     
       <div className="flex gap-5">
        
       <button id="btn1" onClick={()=>setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
       <button id="btn2" onClick={()=>setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
       <button id="btn3" onClick={()=>setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
       </div>
    </div>


    <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
      <h1 className="text-3xl text-mytext text-center">Hello World
      <p> welcome To Testnig TailwindCss </p>
      </h1>
     
       <div className="flex gap-5">
       <button id="btn1" onClick={()=>setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
       <button id="btn2" onClick={()=>setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
       <button id="btn3" onClick={()=>setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
       </div>
    </div>
    <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
      <h1 className="text-3xl text-mytext text-center">Hello World
      <p> welcome To Testnig TailwindCss </p>
      </h1>
     
       <div className="flex gap-5">
       <button id="btn1" onClick={()=>setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
       <button id="btn2" onClick={()=>setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
       <button id="btn3" onClick={()=>setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
       </div>
    </div>
    <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
      <h1 className="text-3xl text-mytext text-center">Hello World
      <p> welcome To Testnig TailwindCss </p>
      </h1>
     
       <div className="flex gap-5">
       <button id="btn1" onClick={()=>setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
       <button id="btn2" onClick={()=>setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
       <button id="btn3" onClick={()=>setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
       </div>
    </div>
    <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
      <h1 className="text-3xl text-mytext text-center">Hello World
      <p> welcome To Testnig TailwindCss </p>
      </h1>
     
       <div className="flex gap-5">
       <button id="btn1" onClick={()=>setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
       <button id="btn2" onClick={()=>setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
       <button id="btn3" onClick={()=>setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
       </div>
    </div>

    <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
      <h1 className="text-3xl text-mytext text-center">Hello World
      <p> welcome To Testnig TailwindCss </p>
      </h1>
     
       <div className="flex gap-5">
       <button id="btn1" onClick={()=>setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
       <button id="btn2" onClick={()=>setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
       <button id="btn3" onClick={()=>setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
       </div>
    </div>
    <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
      <h1 className="text-3xl text-mytext text-center">Hello World
      <p> welcome To Testnig TailwindCss </p>
      </h1>
     
       <div className="flex gap-5">
       <button id="btn1" onClick={()=>setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
       <button id="btn2" onClick={()=>setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
       <button id="btn3" onClick={()=>setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
       </div>
    </div>
    <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
      <h1 className="text-3xl text-mytext text-center">Hello World
      <p> welcome To Testnig TailwindCss </p>
      </h1>
     
       <div className="flex gap-5">
       <button id="btn1" onClick={()=>setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
       <button id="btn2" onClick={()=>setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
       <button id="btn3" onClick={()=>setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
       </div>
    </div>
    <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
      <h1 className="text-3xl text-mytext text-center">Hello World
      <p> welcome To Testnig TailwindCss </p>
      </h1>
     
       <div className="flex gap-5">
       <button id="btn1" onClick={()=>setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
       <button id="btn2" onClick={()=>setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
       <button id="btn3" onClick={()=>setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
       </div>
    </div>


    </div>
  )
}

export default Dashboard
