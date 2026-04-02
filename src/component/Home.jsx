import React from 'react'
import Suggest from './Suggest'
import Raters from './Raters'
import Rate from './Rate'
import Discovery from '../page/Discovery'
import Offer from './Offer'
import Process from './Process'
import Design from '../page/Design'
import Reason from '../page/Reason'
import Herosection from './Herosection'
import Navbar from './Navbar'

const Home = () => {
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
    <Suggest/>
    </div>
  )
}

export default Home
