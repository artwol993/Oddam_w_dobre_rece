import React from 'react';
import '../../../scss/components/HomeHeader.scss';

function HomeHeader() {
    return (
        <>

            <div className="home-container">
                <div className="home-background"></div>
                <div className="home-box">
                    <p>Zacznij pomagać!</p>
                    <p> Oddaj niechciane rzeczy w zaufane ręce</p>
                    <div className="decoration"></div>
                    <div className="button-box">
                        <button className="home-button">Oddaj rzeczy</button>
                        <button className="home-button">Zorganizuj zbiórkę</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeHeader
