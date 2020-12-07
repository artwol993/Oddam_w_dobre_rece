import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss';
import "@fortawesome/fontawesome-free/js/all";

function Navbar() {
    const [click, setClick] = useState(false);
    const [element, setEleent]=useState

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const iii = () => {
        return (click ? <i className='fas fa time' /> : <i className='fas fa-bars' /> )};

useEffect(() => {
    effect
    return () => {
        cleanup
    }
}, [input])


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>


                    <div className='menu-icon' onClick={handleClick}>
                        {iii()}
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