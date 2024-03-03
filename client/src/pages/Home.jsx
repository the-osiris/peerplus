import React from "react";
import Navbar from "../components/Navbar";
import Yourpeer from "../components/Yourpeer";
import Discover from "../components/Discover/Discover";

function Home() {
  return (
    <div className="flex w-full h-full bg-[#F6F6F6]">
      <Navbar />
      <Discover />
      <Yourpeer />
    </div>
  );
}

export default Home;
