import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>



        </>

    );
}

export default Navbar

