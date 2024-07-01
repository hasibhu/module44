import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

import LineChart from './components/LineChart/LineChart'

function App() {
  

  return (
    <>
    {/* navbar */}
      <Navbar></Navbar>
      

      {/* DaisyNav Section Section */}
      {/* <DaisyNav></DaisyNav> */}


      <h1 className="text-4xl text-center">Vite + React</h1>
      <PriceOptions></PriceOptions>

      <LineChart></LineChart>
      
    </>
  )
}

export default App
