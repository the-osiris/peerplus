import React, { useEffect, useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import profileImg from "../assets/image/Male.png";

function Navbar() {
  const [path, setPath] = useState("discover");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") setPath("discover");
    else if (location.pathname == "/chat") setPath("chat");
    else if (location.pathname == "/search") setPath("search");
    else if (location.pathname == "/profile") setPath("profile");
  }, [location]);
  return (
    <div className="w-[20%] h-screen p-5 flex flex-col justify-between">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl text-[#4461F2]">peerplus!</h1>
        <div className="flex flex-col gap-3">
          <Link to="/">
            <div
              className={
                path == "discover"
                  ? "flex items-center px-3 py-3 bg-[#4461F2] rounded-xl gap-3 text-white"
                  : "flex items-center px-3 py-3 rounded-xl gap-3 text-black hover:bg-gray-200"
              }
            >
              <BsGlobe2 className="text-xl" />
              <p className="text-xl">Discover</p>
            </div>
          </Link>
          <Link to="/chat">
            <div
              className={
                path == "chat"
                  ? "flex items-center px-3 py-3 bg-[#4461F2] rounded-xl gap-3 text-white"
                  : "flex items-center px-3 py-3 rounded-xl gap-3 text-black hover:bg-gray-200"
              }
            >
              <AiOutlineMessage className="text-xl" />
              <p className="text-xl">Messages</p>
            </div>
          </Link>
          <Link to="/search">
            <div
              className={
                path == "search"
                  ? "flex items-center px-3 py-3 bg-[#4461F2] rounded-xl gap-3 text-white"
                  : "flex items-center px-3 py-3 rounded-xl gap-3 text-black hover:bg-gray-200"
              }
            >
              <IoSearchOutline className="text-xl" />
              <p className="text-xl">Search</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="">
        <Link to="/profile">
          <div
            className={
              path == "profile"
                ? "flex justify-between items-center px-3 py-3 bg-[#4461F2] rounded-xl gap-3 text-white"
                : "flex justify-between items-center px-3 py-3 rounded-xl gap-3 text-black hover:bg-gray-200"
            }
          >
            <img
              src={profileImg}
              alt="no"
              className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-white"
            />
            <div className="flex flex-col items-end">
              <p className="text-md">Username</p>
              <p className="text-sm text-gray-400">Full Name</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
