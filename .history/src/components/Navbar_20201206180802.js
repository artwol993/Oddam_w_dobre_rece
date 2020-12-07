import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <i className="fas fa-truck"></i>
                    TS-Platform
                </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                   {/* <ul className={click ? "nav_menu active" : "nav_menu"}>

                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>Start</Link>
                        </li>
                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>O co chodzi?</Link>
                        </li>
                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>O nas</Link>
                        </li>
                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>Fundacja i organizacje</Link>
                        </li>
                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    );
}

export default Navbar

{/* <ul className={click ? "nav_menu active" : "nav_menu"}>

                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>Start</Link>
                        </li>
                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>O co chodzi?</Link>
                        </li>
                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>O nas</Link>
                        </li>
                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>Fundacja i organizacje</Link>
                        </li>
                        <li className='nav_item'>
                            <Link to='/' className='nav_link' onClick={closeMobileMenu}>Kontakt</Link>
                        </li>
                    </ul>