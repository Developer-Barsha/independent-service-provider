import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about flex gap-6'>
            <div className='my-auto flex flex-col gap-2'>
                <h1 className="text-5xl font-semibold text-gray-400">LAMIA TABASSUM BARSHA</h1>

                <h4 className='text-xl text-green-500 border-green-500'>Get to know about my dream</h4>

                <h3 className="text-2xl">To acheive something you never had you have to do something you never did</h3>

                <p>My dream is to be a web developer and that's why I enrolled in the web development course by Jhankar Mahbub. This course taught me so many things. Now I want to complete this course successfully and get a job. I want to make my parents proud of me. Inshallah, I will be able to make my dream true.</p>
            </div>
            <img src="https://i.pinimg.com/originals/d5/b8/60/d5b860a2d385bacdfab680299145bb66.jpg" alt="" />
        </div>
    );
};

export default About;