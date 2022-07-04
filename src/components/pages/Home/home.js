import React from 'react';
import HeroSection from './heroSection';
import Profits from './profits';
import SimpleSteps from './simpleSteps';
import AboutUs from './aboutUs';
import WhoWeHelp from './WhoWeHelp/whoWeHelp';
import Contact from './Contact/contact'

function Home() {
   return (
      <>
         <HeroSection />
         <Profits />
         <SimpleSteps />
         <AboutUs />
         <WhoWeHelp />
         <Contact />
      </>

   )
}

export default Home
