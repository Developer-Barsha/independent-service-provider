import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import './Service.css'

const Service = ({service}) => {
    const {name, price, img, description} = service;
    return (
        <div className='daisy'>
            <img src={img} alt="" />
            <h1 className='text-3xl'>{name}</h1>
            <h3 className='text-2xl'>Price: ${price}</h3>
            <p>{description}</p>
            <button className='primary-btn mx-auto'>
                Choose Plan
                <ArrowRightIcon width={20}></ArrowRightIcon>
            </button>
        </div>
    );
};

export default Service;