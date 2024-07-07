import React,{useContext} from 'react'
import {useRef,useState } from 'react'
import ProjectContext from '../../../Context/Project.js';
import { useNavigate } from 'react-router-dom';

const CreateNewPorject = () => {
    const Navigate=useNavigate();
     

    const {setProject} = useContext(ProjectContext);
 
    
   
   const projectNameRef = useRef(null);
   const projectDescriptionRef = useRef(null);
   const [projectvisiblityRef,setProjectvisiblity] = useState("1");
 
 
   const handleSubmit = (e) => {
 
     e.preventDefault();
     const projectName = projectNameRef.current.value;
     const projectDescription = projectDescriptionRef.current.value;
     const projectVisibility = projectvisiblityRef;
      console.log(projectVisibility);
 
     const newProject = {
       projectTitle: projectName,
       projectDescription: projectDescription,
       projectVisibility: projectVisibility,

     };
     setProject(newProject);
     projectNameRef.current.value = '';
     projectDescriptionRef.current.value = '';
     setProjectvisiblity("1");
     Navigate('/dashboard');
     
   };
 
  return (
    <div className={`container mx-auto gap-10 p-4 font-serif flex justify-center items-center font-bold text-mytext`}>
  <form className="bg-copy_secondary min-w-[90%] md:min-w-[50%] rounded px-4 md:px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
        <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-mytext mb-2">Create New Project</h1>
        <hr className='border-mytext/50 mb-6'></hr>
      <label
        className="block text-mytext text-sm font-bold mb-2"
        htmlFor="projectName"
      >
        Project Name <sup>*</sup>
      </label>
      <input
        className="shadow appearance-none border bg-copy_primary text-sm rounded w-full py-2 px-3 text-mytext leading-tight focus:outline-none focus:shadow-outline"
        id="projectName"
        type="text"
        placeholder="Project Name"
        required=""
        ref={projectNameRef}
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-mytext text-sm font-bold mb-2"
        htmlFor="projectDescription"
      >
        Project Description
      </label>
      <textarea
        className="shadow appearance-none textarea resize-none h-32 border bg-copy_primary text-sm rounded w-full py-2 px-3 text-mytext leading-tight focus:outline-none focus:shadow-outline"
        id="projectDescription"
        type="projectDescription"
        rows={1}
        maxLength={100}
        placeholder="Project Description"
        ref={projectDescriptionRef}

        
        />
      <p className="text-green-500 text-xs italic mb-3">Please provide a project Description</p>
      <label htmlFor="visibility" className='block text-mytext text-sm font-bold mb-2'>Project Visibility </label>
      <select id="visiblity" 
              className="shadow appearance-none border bg-copy_primary text-sm rounded w-full py-2 px-3 text-mytext leading-tight focus:outline-none focus:shadow-outline"
              value={projectvisiblityRef}
              onChange={(e) => setProjectvisiblity(e.target.value)}
               
               >
          <option value="1">Public</option>
          <option value="0">Private</option>

          
        </select>
        <p className="text-green-500 text-xs italic mb-3">Switch Between public and private</p>

        
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-btnbackground hover:bg-btnbackground/50 text-btntext font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleSubmit}
      >
        Create
      </button>
      {/* <a
        className="inline-block align-baseline font-bold text-sm text-mytext hover:text-mytext/50"
        href="#"
      >
         extra redirect link
      </a> */}
    </div>
  </form>
 
</div>

  )
}

export default CreateNewPorject;
