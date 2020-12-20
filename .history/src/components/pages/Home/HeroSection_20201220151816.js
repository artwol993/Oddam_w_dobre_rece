import React from 'react';
import '../../../scss/components/HeroSection.scss';

function HeroSection() {
    return (
        <>

            <div className="home-container id="hero-section">
                <div className="home-background"></div>
                <div className="home-box">
                    <h1>Zacznij pomagać!<br />
                    Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="decoration"></div>
                    <div className="button-box">
                        <button className="main-button">Oddaj rzeczy</button>
                        <button className="main-button">Zorganizuj zbiórkę</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection
