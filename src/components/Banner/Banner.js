import React from 'react';
// import girl from '../../images/girl2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex banner justify-center items-center'>
            <div>
                <h1 className='text-4xl slogan'>
                    There is one thing the <span>photograph</span> must contain, the <span>humanity</span> of the moment
                </h1>
                <button className='explore-btn'>Explore More</button>
            </div>
            <div>
                <img src='https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            </div>
        </div>
    );
};

export default Banner;