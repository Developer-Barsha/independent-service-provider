import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import './Service.css'

const Service = ({service}) => {
    const {name, price, img, description} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div>
            <h1 className='text-2xl'>{name}</h1>
            <h3 className='text-xl text-green-500 price'>Price: ${price}</h3>
            </div>
            <p>{description}</p>
            <button className='service-btn'>
                Choose Plan
                <ArrowRightIcon width={20}></ArrowRightIcon>
            </button>
        </div>
    );
};

export default Service;