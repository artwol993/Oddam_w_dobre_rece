import React from 'react'
import "../../../../scss/components/WhoWeHelp.scss";



function WhoWeHelp() {
    return (
        <>
            <div className="wwh-container" id="who-we-help">
                <h2>Komu pomagamy?</h2>
                <div className="decoration"></div>
                <div className="wwh-button-contaier">
                    <button>Fundacjom</button>
                    <button>Organizacjom poza rządowym</button>
                    <button>Lokalnym zbiórkom</button>
                </div>
                <div className="wwh-info">
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, zktórymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>
                <div className="wwh-carousel">
                    <WwhSlider />
                </div>



            </div>

        </>
    )
}

export default WhoWeHelp
