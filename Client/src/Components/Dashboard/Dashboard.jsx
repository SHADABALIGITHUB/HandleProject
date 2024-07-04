
import React from 'react';
import SearchBox from './SearchBox';
import ProjectNavigation from './Projects/ProjectNavigation';
import ProjectContainer from './Projects/ProjectContainer';

const Dashboard = () => {
  return (
    <>

    
     <SearchBox/>

   
    <div className='flex'>

      <ProjectNavigation />
      
       
      <ProjectContainer />

    
    </div>
   
    </>
  )
}

export default Dashboard;
