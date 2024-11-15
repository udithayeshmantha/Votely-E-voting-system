import React from "react";
import Landing from "../assets/landing.svg";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-5 p-20 md:p-20 lg:px-48 lg:py-40">
        <div className="text-center lg:text-left">
          <div className="font-black text-3xl md:text-4xl lg:text-5xl">
            Votely{" "}
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Online Voting System
            </span>
          </div>
          <div className="text-lg md:text-xl mt-4">
            Let's make voting and elections easy for you.
            This site ensures a secured voting session.
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="w-2/3 lg:w-1/2 mt-8 lg:mt-0  justify-items-center">
          <img src={Landing} alt="Landing" className="lg:w-10/12 lg:h- md:w-1/2 md:h-1/2 sm:w-1/2 sm:h-1/2" />
        </div>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row justify-around items-center gap-5 p-5 md:p-10 lg:px-32 lg:pb-20 bg-slate-400">
        <div className="text-center lg:text-left">
          <div className="font-black text-3xl md:text-4xl lg:text-5xl">
            Votely{" "}
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Online Voting System
            </span>
          </div>
          <div className="text-lg md:text-xl mt-4">
            Let's make voting and elections easy for you.
            This site ensures a secured voting session.
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 hidden sm:block justify-items-center">
          <img src={Landing} alt="Landing" className="lg:w-full lg:h- md:w-1/2 md:h-1/2 sm:w-1/2 sm:h-1/2" />
        </div>
      </div>
      
      <div className="text-center lg:text-left">
        <div className="text-2xl font-semibold">Steps</div>
        <div className="text-xl mt-4">Quote</div>
        <div className="text-xl mt-4">Features</div>
      </div>
    </div>
  );
};

export default Home;
