import React from 'react'
import { GoDotFill } from 'react-icons/go'
import lit from "../assets/lit.png"
import maa from "../assets/maa.png"
import star from "../assets/star.png"

const Reason = () => {
  return (
    <section className='bg-gray-300 py-20 px-6 flex justify-center items-center '>
      <div className=' flex-col mx-auto '>


        <div  className='mx-auto flex flex-col w-fit text-center'>
          <p className='ring-1 px-2  ring-black w-fit flex  rounded-full'><GoDotFill className='text-green-300 text-2xl' />  WHY CHOOSE ME</p>
          <h1 className='md:text-8xl text-5xl pb-11 font-medium '>Why Work with Me</h1>
        </div>


        <div  className=' flex flex-col md:flex-row gap-5 md:w-[65%] mx-auto '>
         <div className='border-0 rounded-2xl py-10 px-10 bg-pink-50'>
            <img className='' src={lit} alt=''/>
            <h1>Tailored Design</h1>
            <p>I believe that every brand is unique and deserves a website that is just as distinctive.</p>

          </div>

          <div className=' border-0 rounded-2xl py-9 px-5 bg-pink-50'>
            <img className=' w-[80%]' src={maa} alt=''/>
            <h1>User-Centric Approach</h1>
            <p>With a strong focus on user experience, I design websites that are intuitive and easy to navigate.</p>

          </div>


          <div  className='border-0 rounded-2xl py-9 px-5  bg-pink-50'>
            <img className='w-[80%]' src={star} alt=''/>
            <h1>Trending Technologies</h1>
            <p>I stay at the forefront of web design trends and Technologies to offer you the most innovation solutions.</p>
          </div>
        </div>


      </div>
       

    </section>
  )
}

export default Reason
