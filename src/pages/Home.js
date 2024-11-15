import React from "react";
import Landing from "../assets/landing.svg";
import Bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="flex flex-col lg:flex-row justify-around items-center gap-5 px-20 py-60 md:px-20 md:py-52 lg:px-48  lg:py-40">
        <div className="text-center lg:text-left">
          <div className="font-black text-3xl md:text-4xl lg:text-5xl">
            Votely{" "}
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Online Voting System
            </span>
          </div>
          <div className="text-lg md:text-xl mt-4">
            Let's make voting and elections easy for you. This site ensures a
            secured voting session.
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="w-2/3 lg:w-1/2 mt-8 lg:mt-0 justify-items-center">
          <img
            src={Landing}
            alt="Landing"
            className="lg:w-10/12 lg:h- md:w-1/2 md:h-1/2 sm:w-1/2 sm:h-1/2"
          />
        </div>
      </div>

      <hr />
      <div className="bg-blue-500 flex flex-col lg:flex-row justify-evenly lg:items-start items-center text-left">
        <div className="text-white p-5 lg:pr-20 lg:pl-5 lg:pb-20 lg:pt-10 mb-4 lg:mb-0 ">
          <div className="text-sm">Step 1</div>
          <div className="text-3xl font-bold ">SIGN UP</div>
          <div className="text-lg hidden lg:block">Create an account to vote</div>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-neutral-300 transition duration-300 hidden lg:block">
            Sign Up Now
          </button>
        </div>
        <div className="text-white p-5 lg:pr-20 lg:pl-5 lg:pb-20 lg:pt-10 mb-4 lg:mb-0 ">
          <div className="text-sm">Step 2</div>
          <div className="text-3xl font-bold">VOTE</div>
          <div className="text-lg hidden lg:block">Vote for your preferred candidate</div>
        </div>
        <div className="text-white p-5 lg:pr-5 lg:pl-5 lg:pb-20 lg:pt-10 ">
          <div className="text-sm">Step 3</div>
          <div className="text-3xl font-bold">VIEW ELECTION RESULTS</div>
          <div className="text-lg hidden lg:block">
            View election results of various candidates
          </div>
        </div>
      </div>

      <div className="text-center lg:text-left">
        <div className="text-xl mt-4">Quote</div>
        <div className="text-xl mt-4">Features</div>
      </div>
    </div>
  );
};

export default Home;
