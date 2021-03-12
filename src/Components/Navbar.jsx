
import React from "react";
import Logo from "../Assets/Images/Group 2.png"

const Navbar = () => {

  return (
    <nav className="navbar">
    <a href="/" className="navbar__logo"><img src={Logo} alt="Logo"/></a>
    <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar__bars">
    </div>

    <div className="navbar__menu">
      <a href="/" className="navbar__menu--links">Home</a>
      <a href="/" className="navbar__menu--links">Programs</a>
      <a href="/" className="navbar__menu--links">Schools</a>
      <a href="/" className="navbar__menu--links">About</a>
      <a href="/" className="navbar__menu--links primary--btn" id="button">Login</a>
    </div>
  </nav>
  );
};
export default Navbar;
