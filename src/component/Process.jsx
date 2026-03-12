import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const Process = () => {
  return (
    <section>
      <div className=" bg-white ">
        <div className=" flex  justify-between pb-[7%] w-[60%] mx-auto">
          <div className=" pt-[12%] w-[35%]">
            <p className="ring-black ring-1 w-fit rounded-full px-2 flex">
              <GoDotFill className="text-green-300 text-2xl" />
              MY PROCESS
            </p>
            <h1 className="text-7xl font-medium">My Creative Workflow</h1>

            <button className="rounded-2xl bg-green-300 flex p-2 font-normal hover:bg-white mt-14">
              <MdSubdirectoryArrowRight />
              Schedule a consultation
            </button>
          </div>
          <div className=" w-[50%]  pt-[5%] ">
            <div className="border-b py-8">
              <h1 className="text-3xl font-medium mb-6">1. Discovery</h1>
              <p>
                I dive deep into understanding your brand, goals, and target
                audience. Through detailed consultations and research, I gather
                essential insights that inform the entire design process.
              </p>
            </div>

            <div className="border-b py-8">
              <h1 className="text-3xl font-medium mb-6">2. Design</h1>
              <p>
                I begin crafting visually compelling and strategic designs. This
                step focuses on translating ideas into tangible visual concepts
                that align with your brand.
              </p>
            </div>

            <div className="border-b py-8">
              <h1 className="text-3xl font-medium mb-6">3. Development</h1>
              <p>
                I transform the visuals into a fully functional website. This
                phase involves meticulous coding and integration to ensure your
                site is responsive and performs seamlessly across devices.
              </p>
            </div>

            <div className="border-b py-8">
              <h1 className="text-3xl font-medium mb-6">4. Launch</h1>
              <p>
                I rigorously test the website to ensure everything functions
                flawlessly before going live. Post-launch, I provide support and
                guidance to help you maximize your new online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
