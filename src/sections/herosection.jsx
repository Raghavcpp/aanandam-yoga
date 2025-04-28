import React from "react";
import image from "../assets/white-nature-leaves-minimal-back.png"; // Correct path
import Navbar from './navbar';
import { words, imgpath } from '../assets/constants/index.js';
import {Drawer,Card} from "./drawer.jsx";

const HeroSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Navbar setIsOpen={setIsOpen}/>
      <div
        className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-white bg-opacity-60"></div> */}

        <div className="relative text-center px-6 max-w-3xl">
          <div className="hero-text">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-black flex flex-wrap justify-center items-center gap-2">
              {words.map((word, index) => (
                <span key={index} className="flex items-center gap-2 has-appear" style={{ animationDelay: `${index * 0.3}s` }}>
                  {word}
                  {imgpath[index] && <img src={`/images/${imgpath[index]}`} className="h-20 inline" alt={`yoga-${index}`} />}
                </span>
              ))}
            </h1>
          </div>
          <p className="text-lg md:text-xl mt-4 text-gray-700">
            Discover harmony of body, mind, and spirit through expert-guided yoga practices.
          </p>
          {/* <button className="btn btn-primary btn-lg px-8 py-3 mt-6 bg-[#312535] text-white hover:bg-black transition-all rounded-full shadow-lg">
            Start Your Journey
          </button> */}
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Card />
      </Drawer>
      
      <div className="relative flex flex-row justify-evenly text-center px-6 w-screen">
        <img src="images/h2-img1.png" alt="h2-img1.png" className="rounded-tl-full h-100" />
        <img src="images/h2-img2.png" alt="h2-img2.png" className="rounded-t-full h-100" />
        <img src="images/h2-img3.png" alt="h2-img3.png" className="rounded-t-full h-100" />
        <img src="images/h2-img4.png" alt="h2-img4.png" className="rounded-tr-full h-100" />
      </div>
    </>
  );
};

export default HeroSection;
