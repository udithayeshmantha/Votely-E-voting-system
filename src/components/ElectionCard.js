import React from "react";
import dashbroad_vote from "../assets/dashbroad_vote.png";

// Assuming Button is a custom component, you can replace it with a standard HTML button if needed
const Button = ({ children, className }) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export function ElectionCard() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="flex justify-between items-center">
        <div className="flex-col justify-between items-center">
          <div className="">
            <h3 className="text-3xl font-semibold">President Student Council</h3>
            <p className="text-lg text-muted-foreground">Ongoing Election</p>
          </div>
          <Button className="mt-4 bg-[#a81d74] py-2 px-3 rounded-md text-white">
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
