import React from "react";
import page from "../assets/page.png";
import { GoDotFill } from "react-icons/go";

const Design = () => {
  const design = [
    {
      name: "Reason",
      year: "2024",
      img: page,
    },

    {
      name: "Impact",
      year: "2025",
      img: "https://images.unsplash.com/photo-1772989527278-962a91a55a36?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Donate",
      year: "2026",
      img: page,
    },
    {
      name: "Donate",
      year: "2026",
      img: page,
    },
  ];
  return (
    <section className="w-full py-20">
      <div className=" flex flex-col  px-80">
        <p className="ring-1 px-2  ring-black w-fit flex  rounded-full">
          <GoDotFill className="text-green-300 text-2xl" /> WHY CHOOSE ME
        </p>
        <h1 className="md:text-6xl text-3xl pb-11 font-medium ">
          Elevating Brands with <br /> Design Brilliance
        </h1>
      </div>
      <div className="grid grid-cols-2 w-[70%] mx-auto">
        {design.map((d, index) => (
          <div key={index} className="p-10">
            <div className="flex justify-between">
              <a className="text-3xl font-bold text-gray-500">{d.name}</a>
              <a className="text-xl">{d.year}</a>
            </div>

            <img src={d.img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Design;
