import React from 'react';
import './NotFound.css'
import notfound from '../../images/notfound.gif'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center notfound'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;