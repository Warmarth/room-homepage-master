import React from "react";
import "../App.css";

const Footer = ({ header, intxt, darkPic, lightPic }) => {
  return (
    <div className="footerComp space-y-7 lg:space-y-0  lg:flex-row mb-2 gap-4">
      <img src={darkPic} alt="darkPic" className="" />
      <div className=" space-y-7  px-[6rem] lg:px-2">
        <h1 className="font-[700] text-[1rem] tracking-[0.5rem]  uppercase">
          {header}
        </h1>
        <p className="text-gray-400">{intxt}</p>
      </div>
      <img src={lightPic} alt="lightPic" className="" />
    </div>
  );
};

export default Footer;
