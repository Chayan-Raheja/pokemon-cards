import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [pkname, setpkname] = useState([]);

  return (
    <div className="w-full py-6 bg-green-200/75 flex items-center justify-around">
      <div className="relative  sm:px-2 h-full flex items-center  ">
        <img
          className="absolute invisible cursor-pointer md:visible w-32 max-w-none"
          src="/poka.webp"
          alt="pokemon"
        />
        <img
          className=" absolute visible md:invisible w-12 max-w-none"
          src="/ball.png"
          alt="pokemon"
        />{" "}
      </div>

      <div className=" sm:px-4  md:pl-10">
        <input
          value={pkname}
          onChange={(e) => {
            setpkname(e.target.value);
          }}
          className=" md:visible border rounded-2xl sm:w-xs sm:px-4 sm:py-2 md:px-5 md:py-3.5 md:w-xl"
          type="text"
          placeholder="Search Pokemon by Name"
        />
      </div>
      <div className=" ">
       <div className="flex gap-7 items-center justify-center  pt-3.5 ">
         <Link
          to="/Home"
          className=" invisible md:visible text-xl font-semibold text-black/80"
        >
          Home
        </Link>
        <Link
          to="/Card"
          className=" invisible md:visible text-xl font-semibold text-black/80"
        >
          Card
        </Link>
        <Link
          to="/Contact"
          className=" invisible md:visible text-xl font-semibold text-black/80"
        >
          Contact Us
        </Link>
       </div>
        <i className="visible md:invisible ri-menu-3-line"></i>
      </div>
    </div>
  );
};

export default Nav;
