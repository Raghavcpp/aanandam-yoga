import React from "react";
import instructorImage from "../assets/instructor_dp.png"; // Ensure correct file path

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Instructor Image */}
        <div className="w-full md:w-1/2 flex justify-center [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
  <img 
    src={instructorImage} 
    alt="Yoga Instructor" 
    className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-orange-300"
  />
</div>


        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-700">About <span className="text-orange-500">Aanandam Yoga</span></h2>
          <p className="text-lg text-gray-700 mt-4">
            At Aanandam Yoga, we believe in the power of yoga to transform lives. Our expert instructors guide students of all levels, helping them find balance, strength, and peace. 
          </p>
          <p className="text-lg text-gray-700 mt-2">
            With a blend of traditional techniques and modern approaches, we offer classes that nurture both body and mind.
          </p>
          <button className="btn btn-primary bg-orange-400 text-white px-6 py-2 mt-6 rounded-full hover:bg-orange-500 transition-all shadow-lg">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
