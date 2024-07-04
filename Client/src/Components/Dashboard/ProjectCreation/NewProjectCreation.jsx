import React,{useContext} from 'react'
import { useState,useRef } from 'react'
import ProjectContext from '../../../Context/Project.js';
import { useNavigate } from 'react-router-dom';
const NewProjectCreation = () => {

    const Navigate=useNavigate();
     

   const {setProject} = useContext(ProjectContext);

   
  
  const projectNameRef = useRef(null);
  const projectDescriptionRef = useRef(null);


  const handleSubmit = (e) => {

    e.preventDefault();
    const projectName = projectNameRef.current.value;
    const projectDescription = projectDescriptionRef.current.value;

    const newProject = {
      projectTitle: projectName,
      projectDescription: projectDescription
    };
    setProject(newProject);
    projectNameRef.current.value = '';
    projectDescriptionRef.current.value = '';
    Navigate('/dashboard');
    
  };


  return (
    <div className={`container mx-auto gap-10 p-4 font-serif flex justify-center items-center font-bold text-mytext`}>

<form className="max-w-lg">
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
  
    <input
      type="text"
      id="title"
      className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Project Name..."
      required=""
      ref={projectNameRef}
    />
    <input
      type="text"
      id="description"
      className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Project description..."
      required=""
      ref={projectDescriptionRef}
    />

    <button
      onClick={handleSubmit}
      type="submit"
      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Create
    </button>
  </div>
</form>

      
    </div>
  )
}

export default NewProjectCreation
