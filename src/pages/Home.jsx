import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import homeImage from "../assets/images/28478005_7442510.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="bg-[#fff7f4] open-sans-custom  flex  justify-center items-center">
          <div className="my-10">
            <div className="flex justify-end ">
              <h5 className="text-5xl">LET US GUIDE YOU</h5>
            </div>
            <div className="flex justify-end  ">
              <span className="text-6xl text-yellow-500 italic ">HOME</span>
            </div>
            <div className="lg:ml-20 my-10 px-10 lg:px-0">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src={homeImage}
            alt="home page image"
            className="object-conatin"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
