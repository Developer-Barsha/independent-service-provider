import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    return (
        <div className='login my-16'>
            <h1 className="text-4xl text-center mb-6 text-green-500">Login</h1>
            <form>
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='Password' />
                <input className='submit-btn' type="submit" value="Login" />
            </form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;