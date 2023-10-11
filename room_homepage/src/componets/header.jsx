import React, { useState } from "react";
import logo from "/images/logo.svg";
import menu from "/images/icon-hamburger.svg";
import closeIcon from "/images/icon-close.svg";

const Header = (props) => {
  const { navbar } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const togglrMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 flex z-10 gap-20 items-center  py-6  transition-all">
      <img
        src={isMenuOpen ? closeIcon : menu}
        alt={isMenuOpen ? closeIcon : menu}
        onClick={togglrMenu}
        className="cursor-pointer mr-[3rem] ml-[2rem] lg:hidden"
      />

      <img src={logo} alt="logo" className="ml-[2rem]" />
      <div
        className={`${
          isMenuOpen ? "absolute flex bg-white p-4 " : "hidden"
        } lg:flex justify-between font-bold font-mono gap-10 items-center transition-shadow`}
      >
        <img
          src={isMenuOpen ? closeIcon : menu}
          alt={isMenuOpen ? closeIcon : menu}
          onClick={togglrMenu}
          className="lg:hidden cursor-pointer "
        />
        <ul className=" lg:relative flex space-x-5 p-4 lg:text-white">
          {navbar.map((item, index) => (
            <li key={index} className=" cursor-pointer hover:shadow-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
