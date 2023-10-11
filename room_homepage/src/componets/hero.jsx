import React, { useState, useEffect } from "react";
import hero1Small from "/images/mobile-image-hero-1.jpg";
import hero2Small from "/images/mobile-image-hero-2.jpg";
import hero3Small from "/images/mobile-image-hero-3.jpg";
import hero1Large from "/images/desktop-image-hero-1.jpg";
import hero2Large from "/images/desktop-image-hero-2.jpg";
import hero3Large from "/images/desktop-image-hero-3.jpg";
import larrow from "/images/icon-angle-left.svg";
import rarrow from "/images/icon-angle-right.svg";
import arrow from "/images/icon-arrow.svg";
import "../App.css";

const data = [
  {
    title: "Discover innovative ways to decorate",
    note: "We provide unmatched quality, comfort, and style for property owners across the country .Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    link: "shop now",
  },
  {
    title: "We are available all across the globe",
    note: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    link: "shop now",
  },
  {
    title: "Manufactured with the best materials",
    note: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    link: "shop now",
  },
];

const heroSmall = [hero1Small, hero2Small, hero3Small];
const heroLarge = [hero1Large, hero2Large, hero3Large];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSmall.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroSmall.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Set the current hero array based on screen width
      const currentHeroArray = screenWidth >= 700 ? heroLarge : heroSmall;
      // Ensure currentIndex is within bounds of the current array
      setCurrentIndex((prevIndex) =>
        prevIndex >= currentHeroArray.length ? 0 : prevIndex
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const currentData = data[currentIndex];
  return (
    <div className="lg:flex justify-between items-center">
      <div className="relative w-full">
        <img
          src={
            currentIndex >= heroSmall.length
              ? heroLarge[currentIndex - heroSmall.length]
              : heroSmall[currentIndex]
          }
          alt={`Slide ${currentIndex + 1}`}
          className="w-full lg:h-[80vh] "
        />

        <div className=" bg-gray-900 w-[10rem] h-[4.5rem] translate-y-[-4.5rem] right-0 absolute lg:translate-x-[10rem] flex items-center justify-around">
          <span onClick={prevSlide} className="arroow">
            <img src={larrow} alt="left arrow" className="" />
          </span>
          <span onClick={nextSlide} className=" arroow">
            <img src={rarrow} alt="right arrow" className="" />
          </span>
        </div>
      </div>
      <div className=" m-[2rem] lg:p-[2rem] flex flex-col gap-[2rem] items-start justify-center max-w-[30rem] ">
        <h1 className="font-bold text-2xl">{currentData.title}</h1>
        <p>{currentData.note}</p>
        <span className="flex items-center gap-2 tracking-[2em] uppercase text-[.789rem] font-extrabold">
          {currentData.link}
          <img src={arrow} alt="arrow" className="animate-pulse" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
