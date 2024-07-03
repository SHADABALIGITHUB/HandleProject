import React from 'react'
import Project from './Project';

const ProjectContainer = () => {

    const projects = [
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
    ]

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
