import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p className='text-center my-3'>© {year} Developer-Barsha</p>
        </footer>
    );
};

export default Footer;