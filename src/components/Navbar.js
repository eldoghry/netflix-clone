import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="img_container">
        <img src="netflix-logo.png" className="navbar__logo" />
      </div>

      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to={"#"} className="active">
            Home
          </Link>
        </li>

        <li className="navbar__link">
          <Link to={"#"}>trending</Link>
        </li>

        <li className="navbar__link">
          <Link to={"#"}>tv shows</Link>
        </li>

        <li className="navbar__link">
          <Link to={"#"}>movies</Link>
        </li>

        <li className="navbar__link">
          <Link to={"#"}>recently added</Link>
        </li>

        <li className="navbar__link">
          <Link to={"#"}>my list</Link>
        </li>
      </ul>

      <div className="navbar__left">
        <span className="navbar__icon">
          <BiSearchAlt />
        </span>

        <span className="navbar__icon">
          <AiOutlineBell />
        </span>

       
          <img src="profile.jpg" className="navbar__profile" />
        
      </div>
    </nav>
  );
};

export default Navbar;
