import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss';



function Navbar() {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

};


return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>


                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-items'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Start
                            </Link>
                    </li>
                    <li className='nav-items'>
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            O co chodzi?
                            </Link>
                    </li>
                    <li className='nav-items'>
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            O nas
                            </Link>
                    </li>

                    <li className='nav-items'>
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Fundacja i organizacje
                            </Link>
                    </li>
                    <li className='nav-items'>
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Kontakt
                            </Link>
                    </li>
                </ul>

            </div>
        </nav>
    </>
);
}

export default Navbar;