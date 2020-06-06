import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({setShowBio}) => {
  return (
    <div className="row blue-bkg nm">
      <div className="col s2 offset-s3 nav-text">
        <Link to="/">Home</Link>
      </div>
      <div className="col s2 nav-text">
        <a href="#!" onClick={() => setShowBio(true)}>Bio</a>
      </div>
      <div className="col s2 nav-text">
        <Link to="/about">Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
