import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
// import girl from '../../images/girl2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex banner justify-center items-center px-5'>
            <div>
                <section className='flex flex-col gap-5'>
                <h1 className='text-4xl slogan'>
                    There is one thing the <span>photograph</span> must contain, the humanity of the <span>moment</span>
                </h1>
                <p>Lorem ipsum dolor sit amet barsha</p>
                <button className='explore-btn mx-0'>
                    Explore More
                    <ArrowRightIcon width={20}></ArrowRightIcon>
                </button>
                </section>
            </div>
            <div>
                <img src='https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            </div>
        </div>
    );
};

export default Banner;