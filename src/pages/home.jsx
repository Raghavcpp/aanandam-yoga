import React, { Component } from 'react'
import HeroSection from '../sections/herosection';
import AboutUs from '../sections/aboutus';
import Classes from '../sections/classes';
import Testimonials from '../sections/testimonials';
import {FAQ, Slider, Slider2} from '../sections/faq';
import Footer from '../sections/footer';
import Contact from '../sections/contact';
import Pricing from '../sections/pricing';
export default class Home extends Component {
  render() {
    return (
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
          
          <HeroSection/>
          <AboutUs/>
          <Slider/>
          <Classes/>
          <Pricing/>
          <Testimonials/>
          <FAQ/>
          <Slider2/>
          <Contact/>
          <Footer/>
        </main>
    )
  }
}
