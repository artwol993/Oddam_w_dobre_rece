import React from 'react';
import "../../../../scss/components/WwhSlider.scss";
// import MOCK_DATA from '../../../../MOCK_DATA.json'

function WwhSlider(props) {


    return (
<>
            <div className="wwh-slide" id="wwh-foundation">

                <div className="wwh-slide-row">                    <div className="wwh-slide-row-box1">
                    <h3>Fundacja {props.foundation}</h3>
                    <p>Cel i misja: {props.objective}</p>
                </div>
                    <div className="wwh-slide-row-box2">
                        <p>{props.items}</p>
                    </div>
                </div>

</>
    )

}

export default WwhSlider;































// export default WwhSlider;