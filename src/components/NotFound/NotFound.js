import React from 'react';
import notfound from '../../images/notfound.gif'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={notfound} width='60%' alt="" />
        </div>
    );
};

export default NotFound;