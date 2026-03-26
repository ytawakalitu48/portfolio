import React from "react";
import { GoDotFill } from "react-icons/go";
import fine from "../assets/fine.png";

const Discovery = () => {
  return (
    <section >
    
      <div className="bg-blue-600 ">
        <div className="flex  mx-auto w-fit">
          <div className="">
            <img className=" rounded-3xl" src={fine} alt="" />
          </div>
          <div className=" bg-amber-950">
            <p className="flex ring-1 rounded-2xl ring-black w-fit">
              
              <GoDotFill className="text-green-300 text-2xl" /> ABOUT ME
            </p>
            <h1 className="font-normal text-7xl ">
              Discover My Design Journey
            </h1>
            <p className="">
              Hello! I'm Wilson Brock, a passionate Web Designer with over a 5+
              of experience in creating visually appealing and user-friendly
              websites. My mission is to bring your brand to life through
              innovative design solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;
