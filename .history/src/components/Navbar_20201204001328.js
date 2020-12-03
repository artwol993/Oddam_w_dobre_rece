import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss'

function Navbar () {
    return (
        <div className="nav_container">
            <div className="mobile_icon">
                <div className="fa_bars"></div>
            </div>
            <ul className="nav_menu">
                <li className="nav_item">Start</li>
                <li className="nav_item">O co chodzi?</li>
                <li className="nav_item">O nas</li>
                <li className="nav_item">Fundacja i organizacje</li>
                <li className="nav_item">Konatkt</li>
            </ul>
        </div>
    )
}

export default Navbar

