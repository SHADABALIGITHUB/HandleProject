import React from 'react'
import { useState } from 'react'

import Sidebar from '../SideBar/Sidebar';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);

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
