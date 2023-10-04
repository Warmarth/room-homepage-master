import { useState } from "react";
import hero1 from "/images/mobile-image-hero-1.jpg";
import hero2 from "/images/mobile-image-hero-2.jpg";
import hero3 from "/images/mobile-image-hero-3.jpg";
import heroBig1 from "/images/desktop-image-hero-1.jpg";
import heroBig2 from "/images/desktop-image-hero-2.jpg";
import heroBig3 from "/images/desktop-image-hero-3.jpg";
import larrow from "/images/icon-angle-left.svg";
import rarrow from "/images/icon-angle-right.svg";

const hero = [hero1, hero2, hero3];
const herobig = [heroBig1, heroBig2, heroBig3];
const Hero = (props) => {
  let [iscount, setIsCount] = useState(0);

  const nextSlide = () => {
    setIsCount((prevIndex) => (prevIndex + 1) % hero.length);
  };
  const backSlide = () => {
    setIsCount((prevIndex) =>
      prevIndex === 0 ? hero.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="relative">
        {hero.map((item, index) => (
          <img
            keys={index}
            src={item}
            alt={`Slide ${iscount + 1}`}
            className={`absolute top-0 left-0 ${
              index === iscount ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          />
        ))}
        <span className="absolute bg-gray-900 space-x-10 top-80 right-0 p-[0.5rem] flex items-center">
          <button onClick={backSlide}>
            <img src={larrow} alt="" />{" "}
          </button>
          <button onClick={nextSlide}>
            <img src={rarrow} alt="" />{" "}
          </button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
