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
    <div className="flex gap-5 items-center p-6 transition-all">
      <img
        src={isMenuOpen ? closeIcon : menu}
        alt={isMenuOpen ? closeIcon : menu}
        onClick={togglrMenu}
        className="cursor-pointer mr-20 lg:hidden"
      />

      <img src={logo} alt="logo" className=" justify-self-center " />
      <div
        className={`${
          isMenuOpen ? "absolute flex bg-white py-6" : "hidden"
        } lg:flex justify-between gap-4 items-center`}
      >
        <img
          src={isMenuOpen ? closeIcon : menu}
          alt={isMenuOpen ? closeIcon : menu}
          onClick={togglrMenu}
          className="lg:hidden cursor-pointer"
        />
        <ul className="sm:absolute lg:relative flex gap-4">
          {navbar.map((item, index) => (
            <li
              key={index}
              className="lg:text-slate-100 cursor-pointer hover:border-b-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
