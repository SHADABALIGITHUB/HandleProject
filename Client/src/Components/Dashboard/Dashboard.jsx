import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { MyTheme } from '../../Context/MyTheme'
import axiosInstance from '../../lib/axiosInstance';
import toast from 'react-hot-toast';


const Dashboard = () => {

  const [user, setUser] = useState(null);
  const init = async () => {
    try {
      const res = await axiosInstance.get("/auth/status");
      console.log(res.data.user);
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    init();
  }, [])


  const { Theme, setTheme } = useContext(MyTheme);

  if (!user) {
    return(
    <p>Loading....</p>
    )
  }

  return (
    <div className={`${Theme} container mx-auto flex-wrap gap-10 p-4 font-serif flex justify-center items-center font-bold text-black bg-background`}>

      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">
        <h1 className="text-3xl text-mytext text-center">Hello World
          <p> welcome To Testnig TailwindCss </p>
        </h1>

        <div className="flex gap-5">

          <button id="btn1" onClick={() => setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
          <button id="btn2" onClick={() => setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
          <button id="btn3" onClick={() => setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
        </div>
      </div>


      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">
        <h1 className="text-3xl text-mytext text-center">Hello World
          <p> welcome To Testnig TailwindCss </p>
        </h1>

        <div className="flex gap-5">
          <button id="btn1" onClick={() => setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
          <button id="btn2" onClick={() => setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
          <button id="btn3" onClick={() => setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
        </div>
      </div>
      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">
        <h1 className="text-3xl text-mytext text-center">Hello World
          <p> welcome To Testnig TailwindCss </p>
        </h1>

        <div className="flex gap-5">
          <button id="btn1" onClick={() => setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
          <button id="btn2" onClick={() => setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
          <button id="btn3" onClick={() => setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
        </div>
      </div>
      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">
        <h1 className="text-3xl text-mytext text-center">Hello World
          <p> welcome To Testnig TailwindCss </p>
        </h1>

        <div className="flex gap-5">
          <button id="btn1" onClick={() => setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
          <button id="btn2" onClick={() => setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
          <button id="btn3" onClick={() => setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
        </div>
      </div>
      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">
        <h1 className="text-3xl text-mytext text-center">Hello World
          <p> welcome To Testnig TailwindCss </p>
        </h1>

        <div className="flex gap-5">
          <button id="btn1" onClick={() => setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
          <button id="btn2" onClick={() => setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
          <button id="btn3" onClick={() => setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
        </div>
      </div>

      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">
        <h1 className="text-3xl text-mytext text-center">Hello World
          <p> welcome To Testnig TailwindCss </p>
        </h1>

        <div className="flex gap-5">
          <button id="btn1" onClick={() => setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
          <button id="btn2" onClick={() => setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
          <button id="btn3" onClick={() => setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
        </div>
      </div>
      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">
        <h1 className="text-3xl text-mytext text-center">Hello World
          <p> welcome To Testnig TailwindCss </p>
        </h1>

        <div className="flex gap-5">
          <button id="btn1" onClick={() => setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
          <button id="btn2" onClick={() => setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
          <button id="btn3" onClick={() => setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
        </div>
      </div>
      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">
        <h1 className="text-3xl text-mytext text-center">Hello World
          <p> welcome To Testnig TailwindCss </p>
        </h1>

        <div className="flex gap-5">
          <button id="btn1" onClick={() => setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
          <button id="btn2" onClick={() => setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
          <button id="btn3" onClick={() => setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
        </div>
      </div>
      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">
        <h1 className="text-3xl text-mytext text-center">Hello World
          <p> welcome To Testnig TailwindCss </p>
        </h1>

        <div className="flex gap-5">
          <button id="btn1" onClick={() => setTheme('red')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Colored</button>
          <button id="btn2" onClick={() => setTheme('light')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Light</button>
          <button id="btn3" onClick={() => setTheme('dark')} className="text-center bg-btnbackground text-btntext p-2 rounded-xl">Dark</button>
        </div>
      </div>


    </div>
  )
}

export default Dashboard
