import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const Offer = () => {
  return (
    <section>
      <div className="bg-blue-300">
        <div className=" ">
          <div className="">
            <p className="ring-1 ring-black flex w-fit rounded-2xl px-2">
              <GoDotFill className="text-green-300 text-2xl" />
              What i Offer
            </p>
            <h1 className="text-7xl font-medium w-[35%]">Empowering Brands Through Design</h1>
          </div>
          <div className="flex">

          <div className="bg-lime-400 ring-2 rounded-2xl mb-6">
            <h1 className="text-2xl font-normal ">Web Design</h1>
            <p >
              Creating visually stunning and user-friendly websites is at the
              heart of what I do.
            </p>

            <p className="border-b-2">Custom Tailored Design</p>
            <p className="border-b-2">Responsive Layouts</p>
            <p className="border-b-2">Custom Tailored Design</p>

            <button className="rounded-2xl bg-green-300 flex p-2 font-normal hover:bg-white mt-14 text-black">
              <MdSubdirectoryArrowRight />
              Schedule a consultation
            </button>
          </div>
          <div className="">
            <h1>Development</h1>
            <p>
              I bring your designs to life with clean, efficient, and
              high-performing code.
            </p>

            <p className="border-b-2">HTML, CSS, & JS Expertise</p>
            <p className="border-b-2">Cross-Browser Compatibility</p>
            <p className="border-b-2">Faster Load Times</p>

            <button className="rounded-2xl bg-green-300 flex p-2 font-normal hover:bg-white mt-14">
              <MdSubdirectoryArrowRight />
              Schedule a consultation
            </button>
          </div>
          <div className="border-2 rounded-2xl p-10 w-fit bg-white">
            <h1>Brand Identity</h1>
            <p>
              Building a strong brand identity is essential for standing out in
              a crowded market.
            </p>

            <p className="border-b-2">Logo Design</p>
            <p className="border-b-2">Cohesive Color Palettes</p>
            <p className="border-b-2">Brand Guidelines</p>

            <button className="rounded-2xl bg-green-300 flex p-2 font-normal hover:bg-white mt-14">
              <MdSubdirectoryArrowRight />
              Schedule a consultation
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
