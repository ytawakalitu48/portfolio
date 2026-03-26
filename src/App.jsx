import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Herosection from './component/Herosection'
import Reason from './page/Reason'
import Design from './page/Design'
import Process from './component/Process'
import Offer from './component/Offer'
import Discovery from './page/Discovery'
import Rate from './component/Rate'
import Raters from './component/Raters'

function App() {


  return (
    <div>
<Navbar/>
    <Herosection/>
    <Reason/>
    <Design/>
    <Process/>
    <Offer/>
    <Discovery/>
    <Rate/>
    <Raters/>
    
    </div>
    
  )
}

export default App
