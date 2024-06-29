import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar";

import {MyTheme}  from "./Context/MyTheme";
import { Outlet } from "react-router-dom";

function App() {
  const [Theme, settheme] = useState('dark');

 
  const setTheme = (theme) => {
    settheme(theme);
  }


  return (
    <MyTheme.Provider value={{Theme,setTheme}}>
      <div className={`${Theme} bg-background flex flex-col min-h-screen`}>
      <Navbar/>
      
      <Outlet/> 
      
   
   
      </div>

    </MyTheme.Provider>




      

  )
}

export default App;
