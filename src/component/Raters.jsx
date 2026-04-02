import React from "react";
import { MdSubtitles } from "react-icons/md";

const Raters = () => {

 const data = [

 {
 subtitles:"TAWAKALIT YUSUF",
 tittle:"My Success Stories", 
 story:"I take pride in collaborating with a diverse range of clients, from ambitious startups to established enterprises.",
 },

 {
 subtitles:"",
 tittle:"“Working with Tawakalit was a game-changer for our online presence. The new website exceeded our expectations in both design and functionality.”​", 
 story:"Jerome Bell CTO, Waverio",
 },

 {
 subtitles:"",
 tittle:"Tawakalit delivered a stunning website that truly reflects our brand's essence. He continuously involves in feedbacks. Highly recommend his expertise!", 
 story:"Wade Warren Founder, Creaty",
 },

]

  return (
    <section className="bg-black">
      
       {data.map ((Love,index) => (

<div
key={index}
className="ring-1 ring-white bg-gray-800 text-white rounded-2xl w-[19%] mx-auto space-y-3  p-8 ">
         <p className="text-green-300">{Love.subtitles}</p>

          <h1 className="font-semibold text-3xl mb-[85%]">
            {Love.tittle}
          </h1>

          <p className="pb-10">
            {Love.story}
          </p>
         


        </div> 

       ) ) 
       }
      
    </section>
  );
};

export default Raters;
