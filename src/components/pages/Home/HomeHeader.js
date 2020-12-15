import React from 'react';
import '../../../scss/components/HomeHeader.scss';

function HomeHeader() {
    return (
        <>

            <div className="home-container">
                <div className="home-background"></div>
                <div className="home-box">
                    <h1>Zacznij pomagać!<br/>
                    Oddaj niechciane rzeczy w zaufane ręce</h1>
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
