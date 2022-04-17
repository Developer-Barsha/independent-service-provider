import React, { useRef } from 'react';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Signup.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
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
        <div className='form my-10'>
            <ToastContainer />
            <h1 className="text-4xl text-center mb-6 text-green-500">Register</h1>
            <form>
                <input type="text" ref={nameRef} name='name' placeholder='Your Name' />
                <input type="email" ref={emailRef} name='email' placeholder='Your Email' />
                <input type="password" ref={passwordRef} name='password' placeholder='Password' />
                <input onClick={signup} className='submit-btn' type="submit" value="Sign Up" />
                <p>Have an account? <Link to={'/login'} style={{color:"#2ad37e", borderBottom:"2px solid #2ad37e"}}>Login here</Link> </p>
            </form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;