import React from 'react';
import Banner from '../Banner/Banner';
import Demos from '../Demos/Demos';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Demos/>
        </div>
    );
};

export default Home;