import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServics] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServics(data))
    }, [])

    return (
        <div className='services mt-12'>
            <h1 className="text-4xl text-center">MY SERVICES</h1>
            <div className="services-container">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;