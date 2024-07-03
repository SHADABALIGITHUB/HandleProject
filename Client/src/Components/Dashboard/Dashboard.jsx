
import React,{useState} from 'react'
// import Project from './Projects/Project';
import SearchBox from './SearchBox';
import ProjectNavigation from './Projects/ProjectNavigation';
import ProjectContainer from './Projects/ProjectContainer';




const Dashboard = () => {
  const [projects,setProject] = useState([
    {
        projectTitle: 'Creating js converter',
        projectDescription: 'This is a project that converts js to typescript'
    },
    {
        projectTitle: 'Image it loader Type script',
        projectDescription: 'This is a project that loads images using typescript'
    },
    {
        projectTitle: 'Todo List',
        projectDescription: 'This is a project that creates a todo list'
    },
    {
        projectTitle: 'Temperature calculator Ai',
        projectDescription: 'This is a project that calculates temperature using Ai'
    },
    {
        projectTitle: 'Currency convertor',
        projectDescription: 'This is a project that converts currency'
    },
  ]);
  
  return (
    <>
   
     <SearchBox/>

   
    <div className='flex'>

      <ProjectNavigation projects={projects}/>
      
       
      <ProjectContainer projects={projects}/>

    
    </div>
    </>
  )
}

export default Dashboard;
