import React, { useEffect, useState } from 'react';
import "../../../../scss/components/WwhSlider.scss";


function WwhSlider() {
    const [foundations, setFoundations] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/foundations/')
            .then(res => res.json())
            .then(data => setFoundations(data))
    }, [])


    return (
        <>
            <div className="wwh-slide" id="wwh-foundation">

                <div className="wwh-slide-row" >
                    <div className="wwh-slide-row-box1">
                        <div className="company">Fundacja {foundations.map(el => (
                            <h3 key={el.id}>{el.conmpany}</h3>
                        ))}</div>
                        <div className="objective">Cel i misja: {foundations.map(el => (
                            < key={el.id}>{el.objective}</>
                        ))}</div>
                    </div>
                    <div className="wwh-slide-row-box2">
                        <div className="items">{foundations.map(el => (
                            <p key={el.id}>{el.items}</p>
                        ))}</div>
                    </div>
                </div>
                <div className="decoration-line"></div>

            </div>

        </>
    )

}

export default WwhSlider;































// export default WwhSlider;