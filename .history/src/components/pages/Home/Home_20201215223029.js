import React from 'react';
import '../../../scss/components/Home.scss';
import HomeHeader from './HomeHeader';
import Profits from './Profits';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import WhoWeHelp from './WhoWeHelp';



function Home() {
    return (
        <>
            <HomeHeader />
            <Profits />
            <SimpleSteps />
            <AboutUs />
            <WhoWeHelp/>
            <Contact/>

        </>

    )
}

export default Home
