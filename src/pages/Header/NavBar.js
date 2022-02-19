import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Utilities/logos/logo.png'

const NavBar = () => {
    return (
        <nav id='navbar' className='navbar__wrapper'>
            <div className="container">
                <div className="navbar">
                    <div className='logo__wrap'>
                        <Link to="/" className='logo'>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <span className="toggle__btn"><i className="fa-solid fa-bars-staggered"></i></span>
                    <ul className="nav__items">
                        <li><Link to="/home" className='nav__link'>Home</Link></li>
                        <li><Link to="#" className='nav__link'>Donation</Link></li>
                        <li><Link to="/events" className='nav__link'>Events</Link></li>
                        <li><Link to="#" className='nav__link'>Blog</Link></li>
                        <li><Link to="/register" className='nav__link btn btn-fill'>Register</Link></li>
                        <li><Link to="/login" className='nav__link btn btn-fill-login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;