import React from "react";
import { useNavigate } from "react-router-dom";
import dashbroad_vote from "../assets/dashbroad_vote.png";

const Button = ({ children, className, onClick }) => {
  return <button className={`btn ${className}`} onClick={onClick}>{children}</button>;
};

export function ElectionCard() {
  const navigate = useNavigate();

  const handleVoteNowClick = () => {
    navigate('/candidates');
  };

  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="flex justify-between items-center">
        <div className="flex-col justify-between items-center">
          <div className="">
            <h3 className="text-3xl font-semibold">President Student Council</h3>
            <p className="text-lg text-muted-foreground">Ongoing Election</p>
          </div>
          <Button 
            className="mt-4 bg-[#a81d74] py-2 px-3 rounded-md text-white"
            onClick={handleVoteNowClick}
          >
            Vote now
          </Button>
        </div>
        <img
          src={dashbroad_vote}
          alt="Voting illustration"
          className="h-40 w-auto object-contain"
        />
      </div>
    </div>
  );
}

export default ElectionCard;