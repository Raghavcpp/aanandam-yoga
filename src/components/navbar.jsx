import React from "react";
import logo from "../assets/logo3.png";
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Classes', href: '#classes' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-green-700 text-2xl font-bold flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12"/> Aanandam Yoga
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
        </div>

        {/* CTA Button */}
        <a href="#join" className="hidden md:block bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition shadow-lg">
          Join Now
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
