import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import star from "../assets/star (1).png";
import splash from "../assets/splash.png";
import sound from "../assets/sound-waves.png";
const Offer = () => {
  const data = [
    {
      title: "Web Design",
      subtitle:
        " Creating visually stunning and user-friendly websites is at the heart of what I do.",
      listone: "Custom Tailored Design",
      listtwo: "Responsive Layouts",
      listhree: "Custom Tailored Design",
      icon: star,
      green: true,
    },

    {
      title: "Development",
      subtitle:
        " I bring your designs to life with clean, efficient, and high-performing code.",
      listone: "HTML, CSS, & JS Expertise",
      listtwo: "Cross-Browser Compatibility",
      listhree: "Faster Load Times",
      icon: splash,
      color: false,
      black: true,
    },

    {
      title: "Brand Identity",
      subtitle:
        " Building a strong brand identity is essential for standing out in a crowded market.",
      listone: "Logo Design",
      listtwo: "Cohesive Color Palettes",
      listhree: "Brand Guidelines",
      icon: sound,
      white: true,
    },
  ];
  return (
    <section>
      <div className="bg-black py-20 ">
        <div className="mx-auto space-y-20 ">
          <div className="mx-auto w-fit mt-20">
            <p className="ring-1 w-fit flex rounded-2xl text-white px-4">
              <GoDotFill className="text-green-300 text-2xl" /> WHAT I OFFER
            </p>

            <h1 className="font-normal text-7xl w-[70%] text-white ">
              Empowering Brands Through Design
            </h1>
          </div>

          <div className="flex mx-auto gap-6 w-[60%]">
            {data.map((lit, index) => (
              <div
                key={index}
                className={`${lit.green && "bg-lime-400 text-black"} ${lit.white ? "bg-white text-black" : " "} ${lit.black && "text-white"} bg-black   rounded-2xl px-10 py-14 w-[400px] space-y-3 `}
              >
                <img className="w-14" src={lit.icon} alt="" />
                <h1 className="font-semibold text-3xl">{lit.title}</h1>

                <p className="mb-6">{lit.subtitle}</p>

                <div className="space-y-4">
                  <p className="border-b pb-4">{lit.listone}</p>
                  <p className="border-b pb-4">{lit.listtwo}</p>
                  <p className="pb-4">{lit.listhree}</p>
                </div>

                <button className="rounded-2xl bg-green-300 flex p-2 font-normal hover:bg-white mt-14 ">
                  <MdSubdirectoryArrowRight className="font-extralight text-2xl " />
                  Schedule a consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
