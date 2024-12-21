import React from "react";
import Votingimage from "../../../assets/Voting-rafiki.png";

const Ongoing = () => {
  return (
    <div className="bg-white shadow p-4 md:p-6 rounded">
      <h2 className="font-bold mb-4 text-base md:text-xl lg:text-xl">Ongoing Elections</h2>
      <div className="flex flex-col md:flex-row items-center justify-stretch">
        <div className="mb-4 md:mb-0">
          <div className="text-xl md:text-2xl lg:text-2xl mb-4 2xl:text-3xl">Presidential Election 2024</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Vote now
          </button>
        </div>

        <img alt="Volety" src={Votingimage} className="w-52 h-auto hidden 2xl:block -my-6 -mr-6 " />
      </div>
    </div>
  );
};

export default Ongoing;