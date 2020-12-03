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
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />

                        <ul className={click ? "nav_menu active" : "nav_menu"}>

                            <li className='nav_item'>
                                <Link to='/' className='nav_item' onClick={closeMobileMenu}>Start</Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/' className='nav_item' onClick={closeMobileMenu}>O co chodzi?</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav_item' onClick={closeMobileMenu}>O nas</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav_item' onClick={closeMobileMenu}>Fundacja i organizacje</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav_item' onClick={closeMobileMenu}>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </>

    );
}

export default Navbar

