import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css'

const Signup = () => {
    return (
        <div className='login my-16'>
            <form>
                <input type="text" name='name' placeholder='Your Name' />
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='Password' />
                <input className='submit-btn' type="submit" value="Sign Up" />
            </form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;