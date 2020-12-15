import React from 'react';
import '../../../scss/components/Home.scss';
import HomeHeader from './HomeHeader';
import Profits from './Profits';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import W


function Home() {
    return (
        <>
            <HomeHeader />
            <Profits />
            <SimpleSteps/>
            <AboutUs/>
        </>

    )
}

export default Home
