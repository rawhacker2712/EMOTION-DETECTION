import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'


function App() {
 

  return (
    < >
    <h1 className='text-black bg-green-400 p-4'>Tailwind CSS</h1>
    <div className='inline-flex'>
      <Cards myobj={{username:"Ram",
                    desc : "Ram is a good boy. I is soo good",
                    btn:"Ram button"}}/>
      <Cards myobj={{username:"Sita",
                    desc:"Sita is a good girl.SHe is good girl",
                    btn:"Sita Bttn"}}/>
    </div>
    

   

    </>
  )
}

export default App
