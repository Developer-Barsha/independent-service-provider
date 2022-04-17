import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init'
import './Signup.css'

const Signup = () => {
    // const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);

    return (
        <div className='login my-16'>
        <h1 className="text-4xl text-center mb-6 text-green-500">Register</h1>
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