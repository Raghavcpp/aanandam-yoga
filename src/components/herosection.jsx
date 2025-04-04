import React from "react";
import image from "../assets/white-nature-leaves-minimal-back.png"; // Ensure correct path & file type

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay
      <div className="absolute inset-0 bg-white bg-opacity-60"></div> */}

      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-green-700">
          Embrace Serenity with <span className="text-orange-500">Aanandam Yoga</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-700">
          Discover harmony of body, mind, and spirit through expert-guided yoga practices.
        </p>
        <button className="btn btn-primary btn-lg px-8 py-3 mt-6 bg-orange-400 text-white hover:bg-orange-500 transition-all rounded-full shadow-lg">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
