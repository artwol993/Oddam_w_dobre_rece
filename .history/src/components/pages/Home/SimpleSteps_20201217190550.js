import React from 'react'
import '../../../scss/components/SimpleSteps.scss';

function SimpleSteps() {
    return (
        <>

            <div className="simple-steps-container">

                <div className="simple-steps-tittle">
                    <h2>Wystarczą 4 proste kroki</h2>
                    <div className="decoration"></div>
                </div>
                <div className="simple-steps-section">
                    <div className="simple-section-box">
                        <div className="simple-steps-box-icon ss-ic-1"></div>
                        <p>Wybierz rzeczy</p>
                        <hr></hr>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="simple-section-box">
                        <div className="simple-steps-box-icon ss-ic-2"></div>
                        <p> Spakuj je</p>
                        <hr></hr>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>

                    <div className="simple-section-box">
                        <div className="simple-steps-box-icon ss-ic-3"></div>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <hr></hr>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="simple-section-box">
                        <div className="simple-steps-box-icon ss-ic-4"></div>
                        <p>Zamów kuriera</p>
                        <hr></hr>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>

                <div className="simple-steps-footer">
                    <button className="home-button">Oddaj rzeczy</button>
                </div>

            </div>

        </>
    )
}

export default SimpleSteps
