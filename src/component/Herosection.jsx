import React from "react";
import smallGirl from "../assets/smallGirl.png";
import { GoDotFill } from "react-icons/go";
const Herosection = () => {
  return (
    <section className="relative flex bg-black h-screen  w-full justify-center">
      <div className="mt-40 text-center">
        <p className=" rounded-full w-fit mx-auto px-2 text-white ring-1 ring-white flex ">
          <GoDotFill className="text-green-300 text-2xl" /> AVAILABLE FOR WORK
        </p>
        <h1 className="font-semibold md:text-[200px] text-8xl  text-white md:leading-40 leading-22">
          TAWAKALIT <br /> YUSUF
        </h1>
        {/*       
      <div className='justify-center items-center text-center '>
      <p className='pt-6 mt-4  text-left text-white'>I blend artistry with cutting-edge technology to deliver websites that not only look stunning but also drive results.</p>
      
      
      <button className='bg-emerald-300 rounded-2xl py-1 px-3 mt-5 '>Schedule a consultation</button>
      </div> */}

        <img
          className="absolute w-100 bottom-1 md:right-[40%] right-[12%]"
          src={smallGirl}
          alt="small girl picture"
        />
      </div>
    </section>
  );
};

export default Herosection;
