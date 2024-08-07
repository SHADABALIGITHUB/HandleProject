import { useState, useEffect } from "react"
import Navbar from "./Components/Navbar/NavbarComponent";
import axiosInstance from "./lib/axiosInstance";
import { MyTheme } from "./Context/MyTheme";
import { Outlet } from "react-router-dom";
import { UserDetails } from "./Context/User";
import  Project  from "./Context/Project";
import Sidebar from './Components/SideBar/Sidebar';
import Auth from "./Context/Auth"

const  App=()=> {

  const [Theme, settheme] = useState('dark');
  const [displayName, setdisplayName] = useState('');
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [profilePhoto, setprofilePhoto] = useState('');
  const [isauth,setIsAuth] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [projects,setProjects] = useState([]);

  const checkAuth = async () => {
    try {
      const res = await axiosInstance.get("/auth/status");
      // console.log(res.data.user);
      if(res.data.user.username){
        
      setdisplayName(res.data.user.username);
    }else{
      setdisplayName("Kaisen User");
    }
      setemail(res.data.user.email);
      setprofilePhoto(res.data.user.profilePhoto);
      setusername(res.data.user.username);
      setIsAuth(res.data.authenticated);

    } catch (error) {
     
      console.log(error);
      setIsAuth(error.response.data.authenticated);
    }
  }

  useEffect(() => {
    checkAuth();
  }, [])

     
   const setProject = (newprojects) => {
 
    setProjects((prevProjects) => [...prevProjects, newprojects]);

}





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
      <UserDetails.Provider value={{displayName, email, profilePhoto,username }}>
        <MyTheme.Provider value={{ Theme, setTheme }}>
           <Project.Provider value={{projects,setProject}}>
   
          <div className={`${Theme} bg-copy_secondary flex flex-col min-h-screen`}>
            <Navbar Name={displayName} Email={email} Profile={profilePhoto} Opensidebar={open} />
            <Sidebar sidebarstatus={sidebar} Closesidebar={close} />

            <Outlet />



          </div>
          </Project.Provider>
        </MyTheme.Provider>
      </UserDetails.Provider>
     </Auth.Provider>
    





  )
}

export default App;
