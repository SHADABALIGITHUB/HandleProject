import { useState, useEffect } from "react"
import Navbar from "./Components/Navbar/NavbarComponent";
import axiosInstance from "./lib/axiosInstance";
import { MyTheme } from "./Context/MyTheme";
import { Outlet } from "react-router-dom";
import { UserDetails } from "./Context/User";
import Sidebar from './Components/SideBar/Sidebar';
import Auth from "./Context/Auth"

const  App=()=> {

  const [Theme, settheme] = useState('dark');
  const [displayName, setdisplayName] = useState('');
  const [email, setemail] = useState('');
  const [profilePhoto, setprofilePhoto] = useState('');
  const [isauth,setIsAuth] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  

  // const [authenticated,setAuthenticated] = useState(false);
  const checkAuth = async () => {
    try {
      const res = await axiosInstance.get("/auth/status");
      setdisplayName(res.data.user.displayName);
      setemail(res.data.user.email);
      setprofilePhoto(res.data.user.profilePhoto);
      setIsAuth(res.data.authenticated);

    } catch (error) {
     
      console.log(error);
      setIsAuth(error.response.data.authenticated);
    }
  }

  useEffect(() => {
    checkAuth();
  }, [])




  if (!email) {
    return (
      <p>Loading....</p>
    )
  }

  const setTheme = (theme) => {
    settheme(theme);
  }

  const open = () => {setSidebar(true);}
  const close = () => {setSidebar(false);}


  return (
    
    <Auth.Provider value={{isauth,setIsAuth,checkAuth}}>
      <UserDetails.Provider value={{ displayName, email, profilePhoto }}>
        <MyTheme.Provider value={{ Theme, setTheme }}>
          <div className={`${Theme} bg-copy_secondary flex flex-col min-h-screen`}>
            <Navbar Name={displayName} Email={email} Profile={profilePhoto} Opensidebar={open} />
            <Sidebar sidebarstatus={sidebar} Opensidebar={close} />

            <Outlet />



          </div>

        </MyTheme.Provider>
      </UserDetails.Provider>
     </Auth.Provider>
    





  )
}

export default App;
