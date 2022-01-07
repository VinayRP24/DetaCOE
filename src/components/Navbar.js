import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                         DetaCOE
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? "nav-menu active" : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/bot" className='nav-links' onClick={closeMobileMenu}>
                                Image Search
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/map" className='nav-links' onClick={closeMobileMenu}>
                                Map
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/Detect" className='nav-links' onClick={closeMobileMenu}>
                                Detect
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar
