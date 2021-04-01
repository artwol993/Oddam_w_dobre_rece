import React from 'react';
import "../../../../scss/components/WwhSlider.scss";


function WwhSlider(props) {



    return (
        <>
            <div className="wwh-slide" id="wwh-fundation">

                <div className="wwh-slide-row">
                    <div className="wwh-slide-row-box1">
                        <h3>Fundacja {props.fundation}</h3>
                        <p>Cel i misja: {props.objective}</p>
                    </div>
                    <div className="wwh-slide-row-box2">
                        <p>ubrania, jedzenie, sprzęt elektroniczny,meble, zabawki</p>
                    </div>
                </div>
                <div className="decoration-line"></div>
                <div className="wwh-slide-row">
                    <div className="wwh-slide-row-box1">
                        <h3>Fundacja "Dla dzieci"</h3>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin</p>
                    </div>
                    <div className="wwh-slide-row-box2">
                        <p> ubrania, meble, zabawski</p>
                    </div>
                </div>
                <div className="decoration-line"></div>
                <div className="wwh-slide-row">
                    <div className="wwh-slide-row-box1">
                        <h3>Fundacja "Bez domu"</h3>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>
                    </div>
                    <div className="wwh-slide-row-box2">
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
            </div>

        </>
    )

}

export default WwhSlider;































// export default WwhSlider;