import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* upper navbar */}
      <div>
        <div>
          <div>
            <a href="#">
              <h1 className="logo">Votely</h1>
            </a>
          </div>
          <div>
            <ul className="langagues">
              <li>
                <a href="#">සිංහල</a>
              </li>
              <li>
                <a href="#">தமிழ்</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
