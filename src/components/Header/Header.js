import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <header>
            <h2>This is header</h2>
            <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/banner'}>Home</CustomLink>
            </nav>
        </header>
    );
};

export default Header;