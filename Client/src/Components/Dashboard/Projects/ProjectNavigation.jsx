import React,{useContext} from 'react'
import ProjectNavigationElement from './ProjectNavigationElement'
import { NavLink } from 'react-router-dom'
import Project from '../../../Context/Project'


const ProjectNavigation = () => { 
     
     const {projects} = useContext(Project);
     

  return (
       <div className='w-1/6 bg-copy_secondary min-h-screen font-Google2'>
             

               <div className='flex items-center justify-between m-2'>

               <h2 className='text-mytext'>Recents</h2>

               <NavLink to="/createproject" className='text-btntext cursor-pointer bg-btnbackground rounded-lg font-bold text-sm p-2'>create Project</NavLink>

               </div>

               {   projects.length === 0 ? <h1 className='text-2xl font-bold text-mytext'>No Projects</h1> :
                     
                    projects.map((project,index) => (
                        <ProjectNavigationElement key={index} projectname={project.projectTitle} />
                    ))
               }
         
              

          

       </div>
  )
}

export default ProjectNavigation
