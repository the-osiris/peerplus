import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import LoginImg from "../assets/image/register.png";

  function Register() {
    const [otp, setOtp] = useState("");
   const [disableButton, setDisableButton] = useState(true);
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [registerData, setRegisterData] = useState({
      email: "",
      password: "",
      cpassword: "",
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleOTPChange = (otpValue) => {
      console.log("value is: ", otp)
      setOtp(otpValue);
    };
    //   console.log(otp)
    const onInputChange = (e) => {
      const { name, value } = e.target;
      setRegisterData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    useEffect(() => {
      const isEmailValid = emailRegex.test(registerData.email);
        
        
      const doPasswordsMatch = registerData.password === registerData.cpassword && registerData.password !== "";
  
      setDisableButton(!(isEmailValid && doPasswordsMatch));
    }, [registerData]);

    function renderOtpForm(){
      
      return (
        <div className="w-full flex flex-col items-center gap-3 justify-center">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-sm text-gray-400">
                      OTP Sent to submitted email address
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
                width: "30px",
                height: "30px",
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
              renderSeparator={<span>&nbsp;</span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
        </div>
      );
    }

    // const handleSendOTPClick = (e) => {
    //   // console.log("clicked");
    //   setRenderOTPForm(
    //     <div className="w-full flex items-center justify-center">
    //       <div className="flex flex-col gap-2 items-center">
    //         <p className="text-sm text-gray-400">
    //                   OTP Sent to submitted email address
    //         </p>
    //         <OtpInput
    //           value={otp}
    //           onChange={(e) => handleOTPChange(e.target)}
    //           isInputNum={true}
    //           shouldAutoFocus={true}
    //           // containerStyle={"flex gap-2"}
    //           inputStyle={{
    //             border: "1px solid black",
    //             borderRadius: "8px",
    //             width: "30px",
    //             height: "30px",
    //             fontSize: "12px",
    //             color: "#000",
    //             fontWeight: "400",
    //             caretColor: "blue",
    //           }}
    //           focusStyle={{
    //             border: "1px solid #CFD3DB",
    //             outline: "none",
    //           }}
    //           inputType="text"
    //           numInputs={6}
    //           renderSeparator={<span>&nbsp;</span>}
    //           renderInput={(props) => <input {...props} />}
    //         />
    //       </div>
    //     </div>
    //   );
    // };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
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
              <div className="right-0 top-0 z-[-10] absolute w-[400px] h-[250px] bg-[#4461F2] blur-3xl opacity-30 z-1"></div>
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
              className="flex flex-col gap-3 w-[300px]"
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
              {registerData.email !== "" && !emailRegex.test(registerData.email) && (
                <p className="text-red-500 text-sm">Invalid Email</p>
              )}
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
                type="password"
                value={registerData.cpassword}
                onChange={onInputChange}
                placeholder="Confirm Password"
                className="w-[300px] px-3 py-2 bg-[#EAF0F7] rounded focus:outline-none"
              />
              {registerData.password !== registerData.cpassword && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              
              )}
              {showOtpForm === true ? (
                renderOtpForm()
              ) : (
                <button
                  disabled={disableButton}
                  onClick={() => setShowOtpForm(true)}
                  type="button"
                  className="w-full py-3 bg-[#4461F2] hover:bg-[#1C3FEF] rounded-lg text-white"
                >
                  Send OTP
                </button>
              )}

              {showOtpForm === true ? (
                <button
                  disabled={otp.length !== 6}
                  type="submit"
                  className="w-full py-3 bg-[#4461F2] hover:bg-[#1C3FEF] rounded-lg text-white"
                >
                  Register
                </button>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
