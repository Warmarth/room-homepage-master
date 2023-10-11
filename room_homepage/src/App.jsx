import React from "react";
import Header from "./componets/header";
import Hero from "./componets/hero";
import Footer from "./componets/FooterComp";
import darkPic from "/images/image-about-dark.jpg";
import lightPic from "/images/image-about-light.jpg";
import "./App.css";

const navbarList = ["Home", "Shop", "About", "Contact"];
const footerText = {
  header: "About our furniture",
  txt: "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
};

function App() {
  return (
    <>
      <div className="">
        <Header navbar={navbarList} />
        <Hero />
        <Footer
          header={footerText.header}
          intxt={footerText.txt}
          darkPic={darkPic}
          lightPic={lightPic}
        />
      </div>
    </>
  );
}

export default App;
