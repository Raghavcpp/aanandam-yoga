import React from "react";
import logo from "../assets/logo3.png";
import { Link } from "react-scroll";
import { navigation } from "../assets/constants";
import ScrollToTopButton from "./scrollToTop.jsx"

const Navbar = ({ setIsOpen }) => {
  return (
    <>
      <nav className="bg-white shadow-md absolute md:fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="home" spy={true} smooth={true} offset={-60} duration={500} className="text-black text-2xl font-display font-bold flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-12"/> Aanandam Yoga
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-gray-700">
            {navigation.map((item) => (
              <Link key={item.name} to={item.path} spy={true} smooth={true} offset={-60} duration={1000} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="btn btn-ghost btn-circle" onClick={() => setIsOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div> */}
        </div>
      </nav>
      <ScrollToTopButton />
    </>
  );
};

export default Navbar;
