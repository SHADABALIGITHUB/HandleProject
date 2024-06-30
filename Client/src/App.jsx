import { useState, useEffect } from "react"
import Navbar from "./Components/Navbar/Navbar";
import axiosInstance from "./lib/axiosInstance";
import { MyTheme } from "./Context/MyTheme";
import { Outlet } from "react-router-dom";
import { UserDetails } from "./Context/User";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/Auth";
// import { set } from "mongoose";
function App() {
  const [Theme, settheme] = useState('dark');
  const [displayName, setdisplayName] = useState('');
  const [email, setemail] = useState('');
  const [profilePhoto, setprofilePhoto] = useState('');
  const [isauth,setIsAuth] = useState(false);
  // const [authenticated,setAuthenticated] = useState(false);
  const init = async () => {
    try {
      const res = await axiosInstance.get("/auth/status");
      // console.log(res.data.user);
      // setUser(res.data.user);
      // setAuthenticated(res.data.authenticated);
      setdisplayName(res.data.user.displayName);
      setemail(res.data.user.email);
      setprofilePhoto(res.data.user.profilePhoto);

    } catch (error) {
      // setAuthenticated(error.response.data.authenticated);
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
    <AuthContext.Provider value={{isauth,setIsAuth}}>
      <UserDetails.Provider value={{ displayName, email, profilePhoto }}>
        <MyTheme.Provider value={{ Theme, setTheme }}>
          <div className={`${Theme} bg-copy_secondary flex flex-col min-h-screen`}>
            <Navbar Name={displayName} Email={email} Profile={profilePhoto} />

            <Outlet />



          </div>

        </MyTheme.Provider>
      </UserDetails.Provider>
    </AuthContext.Provider>





  )
}

export default App;
