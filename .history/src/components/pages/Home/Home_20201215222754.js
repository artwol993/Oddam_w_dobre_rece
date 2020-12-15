import React from 'react';
import '../../../scss/components/Home.scss';
import HomeHeader from './HomeHeader';
import Profits from './Profits';


function Home() {
    return (
        <>
            <HomeHeader />
            <Profits />
            <SimpleSteps/>
        </>

    )
}

export default Home
