import React from "react";
import image from "../assets/white-nature-leaves-minimal-back.png"; // Correct path
import Navbar from './navbar';
import { words, imgpath } from '../assets/constants';
import {Drawer,Card} from "./drawer.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const HeroSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Navbar setIsOpen={setIsOpen}/>
      <div id="home"
        className="mt-2  relative w-full h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#F7EDE4] bg-opacity-60"></div> */}

        <div className="relative text-center px-6 max-w-3xl">
          <div className="hero-text">
            <h1 className="font-display text-4xl md:text-6xl  text-black flex flex-wrap justify-center items-center gap-2">
              {words.map((word, index) => (
                <span key={index} className="flex items-center gap-2 has-appear" style={{ animationDelay: `${index * 0.2}s` }}>
                  {word}
                  {imgpath[index] && <LazyLoadImage effect="blur" src={`/images/${imgpath[index]}`} className="h-20 inline" alt={`yoga-${index}`} />}
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
      <div className="grade bg-linear-to-b from-[#FAFAFA] to-[#F7EDE4] h-10 md:h-30"></div>
      <div className="relative flex center flex-row flex-wrap justify-evenly text-center w-screen">
        <LazyLoadImage effect="blur" src="900 x 1284/h2-img1.jpg" alt="h2-img1.png"  data-aos="fade-right" className="rounded-tl-full max-h-100" />
        <LazyLoadImage effect="blur" src="900 x 1284/h2-img2.jpg" alt="h2-img2.png"  data-aos="fade-up" className="rounded-t-full max-h-100" />
        <LazyLoadImage effect="blur" src="900 x 1284/h2-img3.jpg" alt="h2-img3.png"  data-aos="fade-up" className="rounded-t-full max-h-100" />
        <LazyLoadImage effect="blur" src="900 x 1284/h2-img4.jpg" alt="h2-img4.png"  data-aos="fade-left" className="rounded-tr-full max-h-100" />
      </div>
    </>
  );
};

export default HeroSection;
