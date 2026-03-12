import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import kill from "../assets/Asset 1tawakalitu.png";

const Navbar = () => {
  const [mobilenav, setMobilenav] = useState(false);
  const openMobilenav = () => {
    setMobilenav(!mobilenav);
  };
  return (
    <nav className="flex justify-between items-center bg-black text-white py-4 px-5 md:px-90  top-0 z-50">
      {/* Logo Section */}
      <div className="text-2xl font-bold tracking-tighter cursor-pointer">
        <img className="flex w-40" src={kill} alt="" />
      </div>

      {/* Navigation Links & Button */}
      <div className="flex items-center gap-12">
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="hover:text-gray-400 cursor-pointer transition-colors">
            Home
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition-colors">
            About
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition-colors">
            Projects
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition-colors">
            Services
          </li>
        </ul>

        {mobilenav && (
          <div className="flex items-center gap-12 absolute w-full top-14 left-0 z-50">
            <ul className=" md:hidden flex flex-col  text-white bg-black p-4  gap-8 text-sm w-full font-medium">
              <li className="hover:text-gray-400 cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition-colors">
                About
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition-colors">
                Projects
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition-colors">
                Services
              </li>
            </ul>
          </div>
        )}
        {mobilenav ? (
          <IoMdMenu
            onClick={openMobilenav}
            className="text-green-500 lg:hidden  flex"
          />
        ) : (
          <IoMdMenu
            onClick={openMobilenav}
            className=" text-green lg:hidden flex"
          />
        )}

        <button className="border border-white hidden md:flex rounded-full px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
