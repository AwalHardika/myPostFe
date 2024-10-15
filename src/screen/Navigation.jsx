import React from "react";
import { AiFillHome, AiFillProfile, AiFillRead } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-full h-16 bg-white flex">
      <div
        className={`flex-1 flex justify-center items-center h-full  bg-white border border-r-slate-500`}
      >
        <NavLink to={"/"}>
          <div className="flex flex-col items-center">
            <AiFillHome className="fill-blue-500 text-2xl" />
            <h1 className="text-blue-500">Home</h1>
          </div>
        </NavLink>
      </div>

      <div className={`flex-1 h-full flex justify-center items-center  bg-white border border-r-slate-500`}>
        <NavLink to={"/myPost"}>
          <div className="flex flex-col items-center">
            <AiFillRead className="fill-blue-500 text-2xl" />
            <h1 className="text-blue-500">My Post</h1>
          </div>
        </NavLink>
      </div>

      <div className=" flex-1 flex justify-center items-center h-full bg-white">
      <NavLink to={"/profile"}>
          <div className="flex flex-col items-center">
            <AiFillProfile className="fill-blue-500 text-2xl" />
            <h1 className="text-blue-500">My Profile</h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
