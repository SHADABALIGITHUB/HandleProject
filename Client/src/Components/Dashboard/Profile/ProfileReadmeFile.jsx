import React from 'react'

const ProfileReadmeFile = () => {
  return (
    <div>
        <div className='bg-copy_secondary min-w-[90%] md:min-w-[50%] rounded px-4 md:px-8 pt-6 pb-8 mb-4 border border-mytext/50 '>
            <h1 className='text-2xl font-bold text-mytext'>README.md (Future we can change this name)</h1>
            <div className='flex gap-2'>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-mytext'>About Me</h1>
                <p className='text-mytext text-sm font-thin'>
                I am a full stack developer and I love to code. I am currently
                working on a project that will help developers to improve their
                skills.
                </p>
            </div>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-mytext'>Skills</h1>
                <ul className='text-mytext text-sm font-thin'>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                </ul>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProfileReadmeFile
