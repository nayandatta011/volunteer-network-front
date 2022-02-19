import React from 'react';
import HeroSection from './HeroSection';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className='header__wrapper'>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
        </header>
    );
};

export default Header;