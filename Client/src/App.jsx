import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import {MyTheme}  from "./Context/MyTheme";

function App() {
  const [Theme, settheme] = useState('light');

 
  const setTheme = (theme) => {
    settheme(theme);
  }


  return (
    <MyTheme.Provider value={{Theme,setTheme}}>
     <div className={`${Theme}`}>
      <Navbar/>
      <Dashboard/>
   
   
    </div>

    </MyTheme.Provider>




      

  )
}

export default App;
