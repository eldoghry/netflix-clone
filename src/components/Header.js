import React from "react";

const Header = () => {
  return (
    <header className="container">
      <nav className="navbar">
        <h2> Header </h2>
        <div className="links">
          <a className="" href="/">
            Home
          </a>
          <a className="btn" href="/create">
            New Post
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
