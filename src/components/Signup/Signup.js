import React, { useRef } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Signup.css';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (user) {
        navigate('/');
    }

    const signup = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    return (
        <div className='login my-16'>
            <ToastContainer />
            <h1 className="text-4xl text-center mb-6 text-green-500">Register</h1>
            <form>
                <input type="text" ref={nameRef} name='name' placeholder='Your Name' />
                <input type="email" ref={emailRef} name='email' placeholder='Your Email' />
                <input type="password" ref={passwordRef} name='password' placeholder='Password' />
                <input onClick={signup} className='submit-btn' type="submit" value="Sign Up" />
            </form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;