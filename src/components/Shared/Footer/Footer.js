import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <p className='text-center my-3'>© {year} Developer-Barsha</p>
        </div>
    );
};

export default Footer;