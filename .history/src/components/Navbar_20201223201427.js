import React, { useState } from 'react';
import '../scss/navbar.scss';
import { Link as ScrollLink } from 'react-scroll';


function Navbar() {

    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    return (
        <>
<ScrollToTop/>
            <nav className='navbar'>
                <div className='navbar-container'>


                    <div className='menu-icon' onClick={handleClick}>
                        <div className={click ? 'x-icon' : 'bars-icon'} />
                    </div>

                    <ul className={click ? 'nav-menu' : 'active'}>

                        <li className='nav-items'>

                            <ScrollLink
                                className='nav-links'
                                activeClass="active"
                                to="hero-section"
                                smooth={true}
                                offset={50}
                                duration={500}
                                onClick={handleClick}>

                                Start
                        </ScrollLink>

                        </li>
                        <li className='nav-items' >

                            <ScrollLink
                                className='nav-links'
                                activeClass="active"
                                to="simple-steps"
                                smooth={true}
                                offset={50}
                                duration={500}
                                onClick={handleClick}>

                                O co chodzi?
                        </ScrollLink>


                        </li>
                        <li className='nav-items'>
                            <ScrollLink
                                className='nav-links'
                                activeClass="active"
                                to="about-us"
                                smooth={true}
                                offset={50}
                                duration={500}
                                onClick={handleClick}>

                                O nas?
                        </ScrollLink>
                        </li>

                        <li className='nav-items'>
                            <ScrollLink
                                className='nav-links'
                                activeClass="active"
                                to="who-we-help"
                                smooth={true}
                                offset={50}
                                duration={500}
                                onClick={handleClick}>

                                Fundacja i organizacje
                        </ScrollLink>
                        </li>
                        <li className='nav-items'>
                            <ScrollLink
                                className='nav-links'
                                activeClass="active"
                                to="contact"
                                smooth={true}
                                offset={50}
                                duration={500}
                                onClick={handleClick}>

                                Kontakt
                        </ScrollLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbar;