import React, { useEffect, useState } from 'react';
import "../../../../scss/components/WwhSlider.scss";


function WwhSlider() {
    const [foundations, setFoundations] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/foundations')
            .then(res => res.json())
            .then(data => setFoundations(data))
    }, [])


    return (
        <>
            <div className="wwh-slide" id="wwh-foundation">

                <div className="wwh-slide-row" >
                    <div className="wwh-slide-row-box1">
                        <h3 className="company">Fundacja {foundations.map(el => (
                            <h3 key={el.id}>{el.conmpany}</h3>
                        ))}</h3>
                        <p className="objective">Cel i misja: {foundations.map(el => (
                            <h3 key={el.id}>{el.conmpany}</h3>
                        ))}</h3> </p>
                    </div>
                    <div className="wwh-slide-row-box2">
                        <p className="items"></p>
                    </div>
                </div>
                <div className="decoration-line"></div>

            </div>

        </>
    )

}

export default WwhSlider;































// export default WwhSlider;