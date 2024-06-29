import React from 'react'
import { CirclePlay } from 'lucide-react'
import NavbarLanding from './NavbarLandingPage';

import './LandingPage.css'
import Footer from './Footer';
import Scroll from './Scroll';


const LandingPage = () => {
    return (
        <div className='container-full text-white bg-gradient-to-r from-gray-900 via-slate-700 to-zinc-900'>
            <NavbarLanding />
            <div className="container mx-auto w-full pt-2 px-4 md:px-20 md:pt-20 flex flex-col md:flex-row">
                <div className='md:w-1/2 w-full' >
                    <div className="container mx-auto flex flex-col my-auto align-middle ">
                        <div className='my-auto  mx-auto lg:mx-0 p-10'>
                            <h1 className="text-xl md:text-4xl lg:text-7xl mb-4"><span className='text-violet-500'>Let’s talk</span> about your next Project!</h1>
                            <p className="text-base md:text-xl lg:text-2xl mb-8 font-Google2">Share your Code with Friends and Collaborate seamlessly and code smarter with our next-gen version control platform.</p>
                            <div className='flex items-center'>
                                <button className='rounded px-2 text-xs py-2  md:px-10 md:py-3 text-white bg-violet-500 hover:bg-violet-600'>Start</button>
                                <div className='pl-4 pr-2'> <CirclePlay /> </div>
                                <p className="text-xs sm:text-sm md:text-base "> Watch highlights</p>
                            </div>


                        </div>
                    </div >
                </div>
                <div className='flex md:w-1/2 w-full items-center justify-center'>
                    <div className='w-64 h-64 md:w-96 md:h-96'>
                        <div className='circular-path h-full w-full'>
                            <img className='circular-image' src="programming/firebase.png" alt="firebase" />
                            <img className='circular-image' src="programming/reactjs.png" alt="react" />
                            {/* <img className='circular-image' src="programming/node.png" alt="node" /> */}
                            <img className='circular-image' src="programming/cpp.png" alt="cpp" />
                            <img className='circular-image' src="programming/python.png" alt="python" />
                            <img className='circular-image' src="programming/java.png" alt="java" />
                            <img className='circular-image' src="programming/html.png" alt="html" />
                            <img className='circular-image' src="programming/css.png" alt="css" />
                            <img className='circular-image' src="programming/js.png" alt="js" />
                            <img className='circular-image' src="programming/bootstrap.png" alt="php" />
                            <img className='circular-image' src="programming/redux.png" alt="mysql" />
                            <img className='circular-image' src="programming/rubby.png" alt="mongodb" />
                            <img className='circular-image' src="programming/tailwindcss.png" alt="mongodb" />
                            

                        </div>
                    </div>




                </div>
            </div>

               {/* scroller */}

               <Scroll/>

               {/* footer */}
          
               <Footer/>

            
        </div>
    );
}


export default LandingPage;