import React from 'react'
import ThemeCard from './ThemeCard'

export default function Settings() {
  return (
     <div  className='container mx-auto flex-1 flex-wrap gap-10 p-4 font-serif flex justify-center items-center font-bold text-black bg-background'>

        <ThemeCard value="light" bgcolor="bg-[rgba(245,245,245)]" textcolor="text-[rgba(0,0,0)]"  bgcolor2="bg-[rgba(215,215,215)]"  bordercolor="border-[rgba(0,0,0)]" />
        <ThemeCard value="dark" bgcolor="bg-[rgba(40,40,40)]" textcolor="text-[rgba(250,250,250)]"  bgcolor2="bg-[rgba(20,20,20)]"  bordercolor="border-[rgba(250,250,250)]" />
        <ThemeCard value="red" bgcolor="bg-[rgba(255,171,171)]" textcolor="text-[rgba(220,220,220)]"  bgcolor2="bg-[rgba(255,48,48)]" bordercolor="border-[rgba(220,220,220)]" />
        
    

     </div>
  )
}
