import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import CustomButton from "../components/button/CustomButton";
import phoneNumberImage from "../assets/images/rb_4408.png";
import CustomInputField from "../components/inputField/CustomInputField";

const UserAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  // Function to handle OTP generation
  const handleGenerateOtp = async (event) => {
    event.preventDefault();
    try {
     
      const response = await axios.post(
        "http://localhost:3000/api/otp/generate",
        { phoneNumber: `+91${phoneNumber}` }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f7f7f7]">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center p-10 border border-yellow-300 rounded-xl shadow-lg bg-white">
        <div>
          <img
            src={phoneNumberImage}
            alt="OTP Security"
            className="object-contain w-[30rem]"
          />
        </div>
        <div className="flex justify-center items-center w-full  ">
          <form onSubmit={handleGenerateOtp}>
            <div className="w-full">
              <h2 className="text-2xl open-sans-custom  my-5">MOBILE NUMBER</h2>
              <CustomInputField
                label="Phone Number "
                type="text"
                placeholder="Enter your mobile number"
                title="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className=" w-[20rem] open-sans-custom text-xs"
              />
            </div>
            <CustomButton
              buttonText="Submit"
              className="bg-blue-500 text-white my-5 w-full hover:text-blue-500 hover:bg-white hover:border-blue-500 hover:shadow-md open-sans-custom "
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
