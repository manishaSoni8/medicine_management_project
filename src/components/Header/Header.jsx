import React from "react";
import logoImg from '../../assets/logo.png'
const Header = () => {
  return (
    <header className="header bg-success">
    <img src={logoImg} alt="logo img" />
      <h2>Medicine Management System</h2>
    </header>
  );
};

export default Header;