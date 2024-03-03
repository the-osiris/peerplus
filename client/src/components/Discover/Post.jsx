/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { IoIosFlame } from "react-icons/io";
import { AiFillGold } from "react-icons/ai";

import userImg from "../../assets/image/Male.png";

function Post({ id }) {
  const [interaction, setInteraction] = useState("");
  //   console.log(interaction);
  return (
    <div className="w-full flex justify-center gap-5">
      <div className="bg-white w-[80%] rounded-xl p-5 flex flex-col gap-5">
        <div className="h-[20%] w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={userImg}
              className="rounded-[50%] h-[50px] w-[50px]"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="text-lg">Username</h3>
              <p className="text-sm text-gray-400">Full Name - 15:03PM</p>
            </div>
            <div className="text-[10px] bg-black px-2 py-1 rounded-xl text-white">
              CS143
            </div>
            <div className="text-[12px] bg-[#4461F2] px-2 py-1 rounded-xl text-white">
              peer+
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#4461F2] px-2 py-1 text-[10px] text-white rounded-xl ">
              Top 10
            </div>
            <div className="bg-black px-2 py-1 text-[10px] text-white rounded-xl flex gap-1 items-center">
              <AiFillGold className="text-[12px]" /> 565
            </div>
          </div>
        </div>
        <div className="h-[80%] w-full text-sm text-gray-800 text-justify flex">
          {/* <img src="" className="h-[300px] w-auto bg-red-300" alt="no" /> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            atque, nostrum cumque harum sunt vitae quia est porro, optio, magnam
            earum iusto accusamus animi ad deserunt. Cupiditate voluptatum sunt
            magnam. Corrupti quos reprehenderit ipsum! Laborum ipsum quia, iusto
            autem voluptates odit laboriosam quaerat adipisci, excepturi
            pariatur voluptate harum sed nesciunt corrupti qui! Liberid minus
            quibusdam deleniti quod incidunt ullam nobis in cum quaerat beatae
            voluptate sequi facere possimus, repudiandae totam temporibus.
            Officiis, praesentium doloremque!
          </p>
        </div>
      </div>
      <div className="bg-white w-[10%] rounded-xl flex flex-col items-center justify-center gap-4 p-5">
        <div className="flex items-center justify-center">
          <label htmlFor={"tup" + id}>
            <FaThumbsUp
              className={
                interaction == "tup"
                  ? "text-2xl text-blue-300"
                  : "text-2xl text-gray-300"
              }
            />
          </label>
          <input
            id={"tup" + id}
            name={id}
            value="tup"
            onChange={(e) => setInteraction(e.target.value)}
            className="hidden"
            type="radio"
          />
        </div>
        <div className="flex items-center justify-center">
          <label htmlFor={"heart" + id}>
            <FaHeart
              className={
                interaction == "heart"
                  ? "text-2xl text-red-500"
                  : "text-2xl text-gray-300"
              }
            />
          </label>
          <input
            id={"heart" + id}
            name={id}
            value="heart"
            onChange={(e) => setInteraction(e.target.value)}
            className="hidden"
            type="radio"
          />
        </div>
        <div className="flex items-center justify-center">
          <label htmlFor={"flame" + id}>
            <IoIosFlame
              className={
                interaction == "flame"
                  ? "text-3xl text-orange-500"
                  : "text-3xl text-gray-300"
              }
            />
          </label>
          <input
            id={"flame" + id}
            value="flame"
            name={id}
            onChange={(e) => setInteraction(e.target.value)}
            className="hidden"
            type="radio"
          />
        </div>
        <div className="flex items-center justify-center">
          <label htmlFor={"tdown" + id}>
            <FaThumbsDown
              className={
                interaction == "tdown"
                  ? "text-2xl text-blue-300"
                  : "text-2xl text-gray-300"
              }
            />
          </label>
          <input
            id={"tdown" + id}
            value="tdown"
            name={id}
            onChange={(e) => setInteraction(e.target.value)}
            className="hidden"
            type="radio"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
