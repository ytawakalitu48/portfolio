import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Herosection from './component/Herosection'
import Reason from './page/Reason'
import Design from './page/Design'
import Process from './component/Process'
import Offer from './component/Offer'

function App() {


  return (
    <div>
<Navbar/>
    <Herosection/>
    <Reason/>
    <Design/>
    <Process/>
    <Offer/>
    
    </div>
    
  )
}

export default App
