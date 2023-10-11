import React from "react";
import "../App.css";

const Footer = ({ header, intxt, darkPic, lightPic }) => {
  return (
    <div className="footerComp  lg:flex-row mb-2">
      <img src={darkPic} alt="darkPic" className="" />
      <div className=" space-y-5 p-5">
        <h1 className="font-bold text-[0.786rem] tracking-[0.5rem] uppercase">
          {header}
        </h1>
        <p className="">{intxt}</p>
      </div>
      <img src={lightPic} alt="lightPic" className="" />
    </div>
  );
};

export default Footer;
