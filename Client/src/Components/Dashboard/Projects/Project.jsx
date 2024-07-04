import React from 'react'

const Project = ({projectTitle,projectDescription}) => {
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
</div>


   
  )
}

export default Project
