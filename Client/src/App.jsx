import { useState ,useEffect} from "react"
import Navbar from "./Components/Navbar/Navbar";
import axiosInstance from "./lib/axiosInstance";
import {MyTheme}  from "./Context/MyTheme";
import { Outlet } from "react-router-dom";
import { UserDetails} from "./Context/User";
// import { set } from "mongoose";
function App() {
  const [Theme, settheme] = useState('dark');
  const [displayName, setdisplayName] = useState('');
  const [email, setemail] = useState('');
  const [profilePhoto, setprofilePhoto] = useState('');
  // const [user, setUser] = useState(null);
  const init = async () => {
    try {
      const res = await axiosInstance.get("/auth/status");
      console.log(res.data.user);
      // setUser(res.data.user);
      setdisplayName(res.data.user.displayName);
      setemail(res.data.user.email);
      setprofilePhoto(res.data.user.profilePhoto);
     
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    init();
  }, [])




  if (!email) {
    return (
      <p>Loading....</p>
    )
  }
 
  const setTheme = (theme) => {
    settheme(theme);
  }


  return (
    <UserDetails.Provider value={{displayName,email,profilePhoto}}>
    <MyTheme.Provider value={{Theme,setTheme}}>
      <div className={`${Theme} bg-copy_secondary flex flex-col min-h-screen`}>
      <Navbar Name={displayName} Email={email} Profile={profilePhoto} />
       
      <Outlet/> 
      
   
   
      </div>

    </MyTheme.Provider>
    </UserDetails.Provider>




      

  )
}

export default App;
