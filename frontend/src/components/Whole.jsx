import React from 'react'
import LandingPage from "./LandingPage";
import TheirStory from './TheirStory';
import OurStory from './OurStory';
import Services from './Services';
import ContactUs from './ContactUs';

const Whole = () => {
  return (
    <>
      <LandingPage />
      <div id="their-story">
        <TheirStory />
      </div>
      <div id="our-story">
        <OurStory />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </>
  )
}

export default Whole