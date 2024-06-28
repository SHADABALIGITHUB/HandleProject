import React from 'react'
import { CirclePlay } from 'lucide-react'
import Navbar from './Navbar';

import './LandingPage.css'


const LandingPage = () => {
    return (
        <div className='container-full text-white bg-gradient-to-r from-gray-900 via-slate-700 to-zinc-900'>
            <Navbar />
            <div className="bg-center min-h-screen w-full pt-2 px-20 md:pt-20 flex">
                <div className='w-1/2'>
                    <div className="container mx-auto flex flex-col my-auto align-middle ">
                        <div className='my-auto  mx-auto lg:mx-0 p-10'>
                            <h1 className="text-7xl mb-4"><span className='text-violet-500'>Let’s talk</span> about your next trip!</h1>
                            <p className="text-2xl mb-8">Share your favorite travel destination and we will feature it in our next blog!</p>
                            <div className='flex items-center'>
                                <button className='rounded px-10 py-3 text-white bg-violet-500 hover:bg-violet-600'>Share your story</button>
                                <div className='pl-4 pr-2'> <CirclePlay /> </div>
                                <p> Watch highlights</p>
                            </div>


                        </div>
                    </div >
                </div>
                <div className='flex w-1/2'>
                    <div className='relative w-full flex justify-center'>
                        <div className='circular-path'>
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
            </div >
            <div>
                <img src="cpp.png" alt="" />
                <img src="" alt="" />

            </div>
        </div>
    );
}


export default LandingPage;