import React, { useState } from "react";
import Post from "./Post";
import { IoMdAdd } from "react-icons/io";

function Discover() {
  const [postPopUp, setPostPopUp] = useState(false);
  return (
    <div className="relative w-[60%] h-screen border-l-[1px] border-r-[1px] border-gray-200 p-5 flex flex-col gap-5 overflow-y-auto">
      <Post id="1" />
      <Post id="2" />
      <Post id="3" />
      <Post id="4" />
      <Post id="5" />
      <Post id="6" />
      <button onClick={() => setPostPopUp(true)} className="fixed h-[50px] w-[50px] rounded-[25px] right-[22%] bottom-[2%] bg-blue-500 text-4xl text-white flex items-center justify-center hover:bg-blue-700">
        <IoMdAdd />
      </button>
      {postPopUp && (
        <div
          onClick={() => {
            setPostPopUp(false);
          }}
          className="fixed z-5 h-screen w-screen left-0 top-0 flex items-center justify-center"
        >
          <div className="w-[800px] h-[500px] bg-white"></div>
        </div>
      )}
    </div>
  );
}

export default Discover;
