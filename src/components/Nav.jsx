import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Nav = () => {
  const [pkname, setpkname] = useState('');
  return (
    <div>
    <div className="w-full py-6 px-2 md:px-6 bg-green-200/75 flex items-center gap-3 justify-between ">
      <div className=" relative sm:px-2 h-full flex items-center  ">
        <img
          className="hidden cursor-pointer md:block w-32 max-w-none"
          src="/poka.webp"
          alt="pokemon"
        />
        <img
          className="  visible md:invisible w-12 max-w-none"
          src="/ball.png"
          alt="pokemon"
        />{" "}
      </div>

      <div className=" sm:px-4  ">
        <input
          value={pkname}
          onChange={(e) => {
            setpkname(e.target.value);
          }}
          className="  border rounded-2xl w-52 px-1 py-2 sm:px-5 sm:py-3.5 sm:w-md md:px-5 md:py-3.5 md:w-xl"
          type="text"
          placeholder="Search Pokemon by Name"
        />
      </div>
      <div className=" relative">
        <div className=" flex gap-7 items-center justify-center   ">
          <Link
            to="/Home"
            className=" hidden md:block  text-xl font-semibold text-black/80"
          >
            Home
          </Link>
          <Link
            to="/Card"
            className=" hidden md:block  text-xl font-semibold text-black/80"
          >
            Card
          </Link>
          <Link
            to="/Contact"
            className=" hidden md:block  text-xl font-semibold text-black/80"
          >
            Contact Us
          </Link>
        </div>
        <i className=" md:hidden text-xl font-semibold text-black/80 ri-menu-3-line"></i>
      </div>
    </div>
  <Search pkname={pkname} />

    </div>
  );
};

export default Nav;

