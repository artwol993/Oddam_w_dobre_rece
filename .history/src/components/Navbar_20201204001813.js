import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>

            <nav className="navbar">
                <div className="nav_container">
                    <div className="mobile_icon" onClick={handleClick}>


                    <ul className="nav_menu">
                        <li className="nav_item">Start</li>
                        <li className="nav_item">O co chodzi?</li>
                        <li className="nav_item">O nas</li>
                        <li className="nav_item">Fundacja i organizacje</li>
                        <li className="nav_item">Konatkt</li>
                    </ul>
                </div>

            </nav>

        </>

    );
}

export default Navbar

