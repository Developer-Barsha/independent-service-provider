import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, img, description} = service;
    return (
        <div className='daisy'>
            <img src={img} alt="" />
            <h1 className='text-3xl'>{name}</h1>
            <h3 className='text-2xl'>Price: ${price}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;