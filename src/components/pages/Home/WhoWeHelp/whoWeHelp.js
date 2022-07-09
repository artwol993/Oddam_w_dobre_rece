import React from 'react';
import "../../../../scss/components/whoWeHelp.scss";
import WwhList from './wwhList';



function WhoWeHelp() {

  // function showList() {
  // }
  return (
    <>
      <div className="wwh-container" id="who-we-help">
        <h2>Komu pomagamy?</h2>
        <div className="decoration"></div>
        <div className="wwh-button-contaier">
          <button className="wwh-button">Fundacjom <br></br></button>
          <button className="wwh-button">Organizacjom pozarządowym</button>
          <button className="wwh-button">Lokalnym zbiórkom</button>
        </div>
        <div className="wwh-info">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </div>
        <div className="wwh-list">
          <WwhList />
        </div>

      </div>

    </>
  )
}

export default WhoWeHelp
