import React from "react";

const Header = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="App-header">
        <a href="/" className="title">
          Travel Planner
        </a>

        <ul className="url">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/router">Router</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
