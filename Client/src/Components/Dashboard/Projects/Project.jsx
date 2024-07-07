import React from 'react'

const Project = ({projectTitle,projectDescription,projectVisibility}) => {
  return (
    
          
 <div
  
   className="cursor-pointer block max-w-sm p-6  rounded-lg shadow bg-background text-mytext hover:shadow-lg hover:bg-copy_primary transition duration-300 ease-in-out"
   >
   <h5 className="mb-2 text-2xl font-bold tracking-tight text-mytext">
    {projectTitle}
   </h5>
   <p className="font-normal text-mytext">
    {projectDescription}
   </p>
   <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{projectVisibility==="1"?"Public":"Private"}</span>
   <span className="bg-yellow-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">HTML</span>
</div>


   
  )
}

export default Project
