import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import banner from '../../../images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex banner justify-center items-center px-5'>
            {/* banner text */}
            <div>
                <section className='flex flex-col gap-5'>
                <h1 className='text-4xl slogan'>
                    There is one thing the <span>photograph</span> must contain, the humanity of the <span>moment</span>
                </h1>
                <p>Welcome to my Bloomy Captures</p>
                <button className='explore-btn mx-0'>
                    Explore More
                    <ArrowRightIcon width={20}></ArrowRightIcon>
                </button>
                </section>
            </div>

            {/* banner image */}
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;