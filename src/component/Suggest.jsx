import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { MdSubdirectoryArrowRight } from 'react-icons/md'

const Suggest = () => {
  return (
    <section className='bg-gray-950 '>

        <div className='bg-black text-white mx-auto w-fit pt-[5%] pb-20  '>

    <p
    className="ring-1 w-fit flex rounded-2xl text-white px-4 mx-auto"
    ><GoDotFill className="text-green-300 text-2xl" />HAVE PROJECT IN MIND?</p>

    <h1 className='text-7xl w-[65%] mx-auto '>Let’s Turn your Ideas into Reality</h1>

    <a className='text-white mx-auto text-2xl border-b flex w-fit pt-5' href='Herosection'>
       <MdSubdirectoryArrowRight className='' /> ytawakalitu48@gmail.com
    </a>

        </div>
      
    </section>
  )
}

export default Suggest
