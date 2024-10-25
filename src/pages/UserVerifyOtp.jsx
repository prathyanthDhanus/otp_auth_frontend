import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CustomButton from "../components/button/CustomButton";
import OtpInput from "react-otp-input";
import otpImage from "../assets/images/rb_5598.png";

const UserVerifyOtp = () => {
  const [otp, setOtp] = useState("");

  //otp handle function
  const verifyOtp = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post("http://localhost:3000",{otp});
      if (response.status === 200) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-[#f7f7f7]">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center p-10 border border-yellow-300 rounded-xl shadow-lg bg-white">
        <div>
          <img
            src={otpImage}
            alt="OTP Security"
            className="object-contain w-[30rem]"
          />
        </div>
        <div className=" flex justify-center items-center  w-full">
          <form onSubmit={verifyOtp}>
            <div className="">
              <h2 className="text-2xl open-sans-custom text-center my-10">
                VERIFY OTP
              </h2>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span className="px-3"></span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="w-12 h-12 text-center border-2 border-gray-300 focus:outline-none focus:border-yellow-500 rounded-lg"
                    style={{
                      padding: "0",
                    }}
                  />
                )}
                containerStyle="flex justify-center space-x-0"
              />
            </div>
            <CustomButton
              buttonText="Verify"
              className="bg-blue-500 text-white my-10 w-full hover:text-blue-500 hover:bg-white hover:border-blue-500 hover:shadow-md open-sans-custom"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserVerifyOtp;
