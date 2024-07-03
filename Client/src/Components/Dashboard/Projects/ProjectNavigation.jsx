import React from 'react'
import ProjectNavigationElement from './ProjectNavigationElement'
import { NavLink } from 'react-router-dom'


const ProjectNavigation = () => {
  return (
       <div className='w-1/6 bg-copy_secondary min-h-screen font-Google2'>
             

               <div className='flex items-center justify-between m-2'>

               <h2 className='text-mytext'>Recents</h2>

               <NavLink to="/createproject" className='text-btntext cursor-pointer bg-btnbackground rounded-lg font-bold text-sm p-2'>create Project</NavLink>

               </div>
         
                <ProjectNavigationElement projectname="Creating js converter" />
                <ProjectNavigationElement projectname="Image it loader Type script" />
                <ProjectNavigationElement projectname="Todo List" />
                <ProjectNavigationElement projectname="Temperature calculator Ai" />
                <ProjectNavigationElement projectname="Currency convertor" />


          

       </div>
  )
}

export default ProjectNavigation
