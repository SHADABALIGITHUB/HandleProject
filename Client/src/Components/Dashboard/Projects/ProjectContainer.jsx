import React,{useContext} from 'react'
import Project from './Project.jsx';
import ProjectContext from '../../../Context/Project.js';

const ProjectContainer = () => {

    const {projects} = React.useContext(ProjectContext);

  return (
    <div className='w-5/6 bg-transparent flex-1'>

    <div className={`container mx-auto flex-wrap gap-10 p-4 font-serif flex justify-center items-center font-bold text-mytext`}>
    
        
        
        { projects.length === 0 ? <h1 className='text-2xl font-bold text-mytext'>No Projects</h1> :
           
          projects.map((project,index) => (
                <Project key={index} projectTitle={project.projectTitle} projectDescription={project.projectDescription} />
            ))
        }
        
    </div>
    </div>
  )
}

export default ProjectContainer
