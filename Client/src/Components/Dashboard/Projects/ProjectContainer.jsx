import React from 'react'
import Project from './Project';

const ProjectContainer = ({projects}) => {

    

  return (
    <div className='w-5/6 bg-transparent flex-1'>

    <div className={`container mx-auto flex-wrap gap-10 p-4 font-serif flex justify-center items-center font-bold text-mytext`}>

        
        {
            projects.map((project) => (
                <Project projectTitle={project.projectTitle} projectDescription={project.projectDescription} />
            ))
        }
       
       
      

     


    </div>
    </div>
  )
}

export default ProjectContainer
