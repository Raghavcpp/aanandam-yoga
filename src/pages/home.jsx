import React, { Component } from 'react'
import Navbar from '../components/navbar';
import HeroSection from '../components/herosection';
import AboutUs from '../components/aboutus';
import Classes from '../components/classes';
import Testimonials from '../components/testimonials';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Pricing from '../components/pricing';
export default class Home extends Component {
  render() {
    return (
      <>
          <Navbar/>
          <HeroSection/>
          <AboutUs/>
          <Classes/>
          <Pricing/>
          <Testimonials/>
          <FAQ/>
          <Contact/>
          <Footer/>
      </>
    )
  }
}
