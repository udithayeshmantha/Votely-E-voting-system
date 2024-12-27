import React from "react";

// Assuming Button is a custom component, you can replace it with a standard HTML button if needed
const Button = ({ children, className }) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export function ElectionCard() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">President Student Council</h3>
          <p className="text-sm text-muted-foreground">Ongoing Election</p>
        </div>
        <img
          src="/lovable-uploads/939e3a79-520f-4042-b195-cd3ced6b6cae.png"
          alt="Voting illustration"
          className="h-24 w-24 object-contain"
        />
      </div>
      <Button className="mt-4">Vote now</Button>
    </div>
  );
}

export default ElectionCard;
