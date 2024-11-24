import React from "react";
import Landing from "../assets/landing.svg";
import Bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className=" flex flex-col lg:flex-row justify-around items-center gap-5 px-20 py-60 md:px-20 md:py-52 lg:px-52  lg:py-48 ">
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
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 font-Poppins">
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

      <div className="bg-blue-500 flex flex-col lg:flex-row justify-evenly lg:items-start items-center text-left shadow-lg">
        <div className=" text-white p-10 lg:pr-20 lg:pl-5 lg:pb-20 lg:pt-10  lg:mb-0 justify-items-center lg:justify-items-start">
          <div className="text-sm font-Poppins">Step 1</div>
          <div className="text-3xl font-bold font-Poppins">SIGN UP</div>
          <div className="text-lg hidden lg:block font-Poppins">
            Create an account to vote
          </div>
          <button className="font-Poppins mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-neutral-300 transition duration-300 hidden lg:block">
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
          <div className="text-3xl font-bold text-center font-Poppins">
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
          <div className="text-xl font-light
           font-Poppins">
            Upgrade from manual ballot counting to an online election system
            without jeopardizing the integrity of your vote.
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold md:text-3xl lg:text-4xl mb-1 font-Poppins">Our Features</h1>
        <p className="text-xl font-light mb-4 font-Poppins">We provide an online voting system that exceed expectations. from secure <br/>
        polling software to the management of complex virtual voting events
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-around items-center p-8">

      <div className="flex flex-col items-center text-center max-w-sm m-4">
        <div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full mb-4">
          <img src="jhhhhh" alt="Secured Platform" className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Secured Platform</h3>
        <p className="text-sm text-gray-600 mt-2">
          With our system, your data is secured
        </p>
      </div>

      <div className="flex flex-col items-center text-center max-w-sm m-4">
        <div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full mb-4">
          <img src="/icons/vote-icon.svg" alt="Vote Online" className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Vote Online</h3>
        <p className="text-sm text-gray-600 mt-2">
          In just a few clicks, you can vote your preferred candidates
        </p>
      </div>

      <div className="flex flex-col items-center text-center max-w-sm m-4">
        <div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full mb-4">
          <img src="/icons/results-icon.svg" alt="Real-Time Results" className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Real-Time Results</h3>
        <p className="text-sm text-gray-600 mt-2">
          View real-time voting results and scores of each candidate
        </p>
      </div>
    </div>

    </div>
  );
};

export default Home;
