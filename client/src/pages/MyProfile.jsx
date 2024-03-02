import React from "react";
import Navbar from "../components/Navbar";
import ShowProfile from "../components/Profile/ShowProfile";
import MySettings from "../components/Profile/MySettings";

function MyProfile() {
  return (
    <div className="flex w-full h-full bg-[#F6F6F6]">
      <Navbar />
      <ShowProfile />
      <MySettings/>
    </div>
  );
}

export default MyProfile;
