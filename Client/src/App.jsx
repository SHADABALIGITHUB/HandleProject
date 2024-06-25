import { useState } from "react"

function App() {
  const [theme, setDark] = useState('red');

  const toggle = () => {
    if (theme === 'red') {
      setDark('dark')
    } else {
      setDark('red')
    }
  }

  return (
    <div className={`${theme} max-auto h-screen p-4 font-serif flex justify-center items-center font-bold text-black bg-gradient-to-b from-background to-copy_primary`}>

      <div className="w-96 h-96 flex flex-col items-center gap-10 shadow-lg bg-copy_secondary shadow-copy_secondary rounded-2xl p-10">  
        <h1 className="text-3xl text-mytext3 text-center">Hello World
        <p> welcome To Testnig TailwindCss </p>
        </h1>
        <button onClick={toggle} className="text-center bg-mytext3 text-mytext2 p-2 rounded-xl">Toggle</button>
      </div>





      



    </div>
  )
}

export default App
