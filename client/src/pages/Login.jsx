import React, { useState } from "react";
import LoginImg from "../assets/image/login.png";
import { Link } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div className="flex flex-col p-10">
      <div className="flex justify-between">
        <div className="text-4xl text-[#4461F2] ">peerplus!</div>
        <div className="text-[#4461F2]">
          <ul className="flex gap-5">
            <Link to="/login">
              <li className="border-b-[2px] border-[#4461F2]">Sign In</li>
            </Link>
            <Link to="/signup">
              <li>Register</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex p-5">
        <div className="w-[70%] h-full p-5">
          <div className="relative h-[600px] w-full p-10 flex flex-col justify-between">
            <div className="relative text-7xl w-fit font-thin leading-[100px]">
              <div className="">
                Sign In to your <br></br>guide to everything.
              </div>
              <div className="top-0 right-0 absolute w-[200px] h-[150px] bg-yellow-500 blur-3xl opacity-30"></div>
            </div>
            <div className="text-lg w-fit relative">
              if you don’t have an account you can <br />
              <Link to="/signup" className="text-blue-500 hover:text-blue-700">
                Register here!
              </Link>
              <div className="right-0 top-0 absolute w-[400px] h-[250px] bg-[#4461F2] blur-3xl opacity-30"></div>
            </div>
            <div className=""></div>
            <img
              src={LoginImg}
              className="absolute w-[50%] h-auto right-0 bottom-0"
              alt=""
            />
          </div>
        </div>
        <div className="w-[30%] h-full p-5">
          <div className="h-[700px] flex flex-col justify-center items-center gap-10">
            <form
              onSubmit={handleLoginSubmit}
              action=""
              className="flex flex-col gap-5 w-[300px]"
            >
              <input
                required
                name="email"
                type="text"
                onChange={onInputChange}
                value={loginData.email}
                placeholder="Enter Email"
                className="w-[300px] px-3 py-2 bg-[#EAF0F7] rounded focus:outline-none"
              />
              <input
                required
                name="password"
                type="password"
                value={loginData.password}
                onChange={onInputChange}
                placeholder="Enter Password"
                className="w-[300px] px-3 py-2 bg-[#EAF0F7] rounded focus:outline-none"
              />

              <Link className="self-end">
                <p className="text-sm text-gray-300 hover:text-gray-500">
                  Forgot Password?
                </p>
              </Link>

              <button
                type="submit"
                className="w-full py-3 bg-[#4461F2] hover:bg-[#1C3FEF] rounded-lg text-white"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
