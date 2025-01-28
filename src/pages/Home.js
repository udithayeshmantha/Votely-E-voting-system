import React from "react";
import Landing from "../assets/landing.svg";
import Bg from "../assets/bg.jpg";
import Votingpana from "../assets/Voting-pana.png";
import Securedatapana from "../assets/Secure data-pana.png";
import RealtimeSyncpana from "../assets/Real-time Sync-pana.png";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className=" flex flex-col lg:flex-row justify-around items-center gap-5 px-10 py-48 md:px-20 md:py-48 lg:px-52  lg:py-48 ">
        <div className="text-center lg:text-left ">
          <div className="font-black text-3xl md:text-4xl lg:text-5xl font-Poppins">
            Votely{" "}
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl font-Poppins">
              Online Voting System
            </span>
          </div>
          <div className="text-lg md:text-xl mt-4 font-Poppins">
            Let's make voting and elections easy for you. This site ensures a
            secured voting session.
          </div>
          <button className="mt-6 px-6 py-3 bg-[#a81d74] text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 transition duration-300 font-Poppins">
            <Link to="/signup" className="text-white">
              Get Started
            </Link>
          </button>
        </div>
        <div className=" mt-8 lg:mt-0 justify-items-center">
          <img
            src={Landing}
            alt="Landing"
            className="lg:w-10/12 w-1/2 md:w-1/2 md:h-1/2 sm:w-1/2 sm:h-1/2"
          />
        </div>
      </div>

      <div className="bg-[#a81d74] flex flex-col lg:flex-row justify-evenly lg:items-start items-center text-left shadow-lg px-16">
        <div className=" text-white p-10 lg:pr-20 lg:pl-5 lg:pb-20 lg:pt-10  lg:mb-0 justify-items-center lg:justify-items-start">
          <div className="text-sm font-Poppins">Step 1</div>
          <div className="text-3xl font-bold font-Poppins">SIGN UP</div>
          <div className="text-lg hidden lg:block font-Poppins">
            Create an account to vote
          </div>
          <button className="font-Poppins mt-6 px-6 py-3 bg-white text-[#a81d74] font-semibold rounded-lg shadow-md hover:bg-neutral-300 transition duration-300 hidden lg:block">
            Sign Up Now
          </button>
        </div>
        <div className=" text-white p-10 lg:pr-20 lg:pl-5 lg:pb-20 lg:pt-10  lg:mb-0 justify-items-center lg:justify-items-start">
          <div className="font-Poppins text-sm">Step 2</div>
          <div className="text-3xl font-bold font-Poppins">VOTE</div>
          <div className="text-lg hidden lg:block font-Poppins">
            Vote for your preferred candidate
          </div>
        </div>
        <div className="text-white p-10 lg:pr-5 lg:pl-5 lg:pb-20 lg:pt-10 justify-items-center lg:justify-items-start">
          <div className="text-sm font-Poppins">Step 3</div>
          <div className="text-3xl font-bold text-center lg:text-left font-Poppins">
            VIEW ELECTION RESULTS
          </div>
          <div className="text-lg hidden lg:block font-Poppins">
            View election results of various candidates
          </div>
        </div>
      </div>

      <div className=" flex justify-center px-8 py-20">
        <div className="max-w-8xl text-center space-y-4">
          <div className="font-extrabold text-2xl md:text-3xl lg:text-4xl font-Poppins">
            Make your decision-making process more modern, safe, and efficient.
          </div>
          <div
            className="text-xl font-light
           font-Poppins"
          >
            Upgrade from manual ballot counting to an online election system
            without jeopardizing the integrity of your vote.
          </div>
        </div>
      </div>
      <div className="text-center px-10">
        <h1 className="text-4xl font-bold md:text-3xl lg:text-4xl mb-1 font-Poppins">
          Our Features
        </h1>
        <p className="text-xl font-light mb-4 font-Poppins">
          We provide an online voting system that exceed expectations. from
          secure <br />
          polling software to the management of complex virtual voting events
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center px-8 pb-28 font-Poppins">
        <div className="flex flex-col items-center text-center max-w-sm m-">
          <div className="w-72 h-72 flex items-center justify-center rounded-full mb-4">
            <img
              src={Securedatapana}
              alt="Secured Platform"
              className="w-72 h-72"
            />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">Secured Platform</h3>
          <p className="text-xl text-gray-600 mt-2 font-light">
            With our system, your data is secured
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm m-">
          <div className="flex items-center justify-center rounded-full mb-4 w-72 h-72 ">
            <img
              src={Votingpana}
              alt="Secured Platform"
              className="w-72 h-72"
            />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">Vote Online</h3>
          <p className="text-xl text-gray-600 mt-2 font-light">
            In just a few clicks, you can vote your preferred candidates
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm m-">
          <div className="flex items-center justify-center rounded-full mb-4 w-72 h-72 ">
            <img
              src={RealtimeSyncpana}
              alt="Secured Platform"
              className="w-72 h-72"
            />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">
            Real-Time Results
          </h3>
          <p className="text-xl text-gray-600 mt-2 font-light">
            View real-time voting results and scores of each candidate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
