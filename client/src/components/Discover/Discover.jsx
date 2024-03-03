import React, { useState } from "react";
import Post from "./Post";
import { IoMdAdd } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import MaleImg from "../../assets/image/Male.png";
import EmojiPicker from "emoji-picker-react";

function Discover() {
  const [postPopUp, setPostPopUp] = useState(false);
  const [emojistate, setEmojiState] = useState(false);
  return (
    <div className="relative w-[60%] h-screen border-l-[1px] border-r-[1px] border-gray-200 p-5 flex flex-col gap-5 overflow-y-auto">
      <Post id="1" />
      <Post id="2" />
      <Post id="3" />
      <Post id="4" />
      <Post id="5" />
      <Post id="6" />
      <button
        onClick={() => setPostPopUp(true)}
        className="fixed h-[50px] w-[50px] rounded-[25px] right-[22%] bottom-[2%] bg-blue-500 text-4xl text-white flex items-center justify-center hover:bg-blue-700"
      >
        <IoMdAdd />
      </button>
      {postPopUp && (
        <div className="fixed z-5 h-screen w-screen left-0 top-0">
          <div
            name="popupArea"
            onClick={() => {
              setPostPopUp(false);
            }}
            className="fixed z-5 h-full w-full left-0 top-0 flex items-center justify-center bg-black opacity-50"
          ></div>
          <div
            name="popup"
            onClick={() => {
              setPostPopUp(true);
            }}
            className="w-[50%] h-[500px] bg-white rounded-xl border-[1px] absolute mx-auto top-[25%] left-[25%] z-[999] p-5 flex flex-col items-center gap-4"
          >
            <div className=" p-2 w-full flex gap-5">
              <img
                src={MaleImg}
                className="w-[50px] h-[50px] rounded-[50%]"
                alt=""
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-lg">username</h3>
                <p className="text-sm text-gray-400">Full Name</p>
              </div>
            </div>
            <textarea className="w-full h-[60%] p-2 border-[1px] border-gray-300 rounded-lg focus:outline-none text-justify"></textarea>
            <div className="flex self-start">
              <div className="relative">
                <MdEmojiEmotions
                  onClick={() => {
                    setEmojiState(!emojistate);
                  }}
                  className="text-gray-400 text-xl hover:text-blue-500"
                />
                <EmojiPicker
                  open={emojistate}
                  searchDisabled
                  className="!absolute !left-0 !z-[1000]"
                />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Discover;
