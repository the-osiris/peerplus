import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";

import LoginImg from "../assets/image/register.png";

function Register() {
  const [otp, setOtp] = useState("");
  const [renderOTPform, setRenderOTPForm] = useState(null);
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const handleOTPChange = (e) => {
    setOtp(otp + e);
  };
  //   console.log(otp)
  const onInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSendOTPClick = (e) => {
    // console.log("clicked");
    setRenderOTPForm(
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-sm text-gray-400">
                    OTP Sent to submitted email address.{ otp}
          </p>
          <OtpInput
            value={otp}
            onChange={(e) => handleOTPChange(e)}
            isInputNum={true}
            shouldAutoFocus={true}
            // containerStyle={"flex gap-2"}
            inputStyle={{
              border: "1px solid black",
              borderRadius: "8px",
              width: "54px",
              height: "54px",
              fontSize: "12px",
              color: "#000",
              fontWeight: "400",
              caretColor: "blue",
            }}
            focusStyle={{
              border: "1px solid #CFD3DB",
              outline: "none",
            }}
            inputType="text"
            numInputs={6}
            renderSeparator={<span> - </span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </div>
    );
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
  };

  return (
    <div className="flex flex-col p-10">
      <div className="flex justify-between">
        <div className="text-4xl text-[#4461F2] ">peerplus!</div>
        <div className="text-[#4461F2]">
          <ul className="flex gap-5">
            <Link to="/login">
              <li>Sign In</li>
            </Link>
            <Link to="/signup">
              <li className="border-b-[2px] border-[#4461F2]">Register</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex p-5">
        <div className="w-[70%] h-full p-5">
          <div className="relative h-[600px] w-full p-10 flex flex-col justify-between">
            <div className="relative text-7xl w-fit font-thin leading-[100px]">
              <div className="">
                Register to your <br></br>guide to everything.
              </div>
              <div className="top-0 right-0 absolute w-[200px] h-[150px] bg-yellow-500 blur-3xl opacity-30"></div>
            </div>
            <div className="text-lg w-fit relative z-10">
              if you have an account you can <br />
              <Link to="/login" className="text-blue-500 hover:text-blue-700 z-10">
                Login here!
              </Link>
              <div className="right-0 top-0 absolute w-[400px] h-[250px] bg-[#4461F2] blur-3xl opacity-30 z-1"></div>
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
                value={registerData.email}
                placeholder="Enter Email"
                className="w-[300px] px-3 py-2 bg-[#EAF0F7] rounded focus:outline-none"
              />
              <input
                required
                name="password"
                type="password"
                value={registerData.password}
                onChange={onInputChange}
                placeholder="Enter Password"
                className="w-[300px] px-3 py-2 bg-[#EAF0F7] rounded focus:outline-none"
              />
              <input
                required
                name="cpassword"
                type="cpassword"
                value={registerData.cpassword}
                onChange={onInputChange}
                placeholder="Confirm Password"
                className="w-[300px] px-3 py-2 bg-[#EAF0F7] rounded focus:outline-none"
              />
              {renderOTPform != null ? (
                renderOTPform
              ) : (
                <button
                  onClick={handleSendOTPClick}
                  type="button"
                  className="w-full py-3 bg-[#4461F2] hover:bg-[#1C3FEF] rounded-lg text-white"
                >
                  Send OTP
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
