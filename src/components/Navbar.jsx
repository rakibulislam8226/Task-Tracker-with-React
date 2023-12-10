import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                Task Tracker
            </Link>
            <div className={`navbar-nav ${isOpen ? 'open' : ''}`}>
                <div className="nav-item">
                    <NavLink to="/about" onClick={toggleMenu}>
                        About
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/services" onClick={toggleMenu}>
                        Services
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/contact" onClick={toggleMenu}>
                        Contact
                    </NavLink>
                </div>
            </div>
            <div className="navbar-actions">
                <div className="nav-item">
                    <button className="login-button" onClick={toggleMenu}>
                        Login
                    </button>
                </div>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </div>
        </nav>
    );
};

export default Navbar;
