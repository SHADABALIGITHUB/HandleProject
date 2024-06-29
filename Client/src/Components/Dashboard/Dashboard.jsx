


import Sidebar from '../SideBar/Sidebar';


  
import React, { useEffect ,useState} from 'react'


import axiosInstance from '../../lib/axiosInstance';
import toast from 'react-hot-toast';


const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
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


 

  if (!user) {
    return(
    <p>Loading....</p>
    )
  }

   const open = () => setSidebar(true);
   const close = () => setSidebar(false);
  return (
    <div className={`container mx-auto flex-wrap gap-10 p-4 font-serif flex justify-center items-center font-bold text-black`}>
  
         <button onClick={open} >Click</button>
    
     

          <Sidebar sidebarstatus={sidebar} Opensidebar={close} />
    
      

    </div>
  )
}

export default Dashboard;
