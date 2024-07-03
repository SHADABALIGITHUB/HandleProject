import React from 'react'

const ProjectNavigationElement = ({projectname}) => {
  return (
    <div className="m-2 w-10/12 p-2 text-mytext border border-mytext/10 hover:underline-offset-1 hover:underline cursor-pointer rounded-lg">
            <div className="flex items-center justify-between">
                
                <h3 className="font-medium">{projectname} </h3>
                
            </div>
        </div>
  )
}

export default ProjectNavigationElement
