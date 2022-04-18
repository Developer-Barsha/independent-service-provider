import React, { useEffect, useRef } from 'react';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const emailRef = useRef('');
    const passwordRef = useRef('');


    // show error handler
    useEffect(() => {
        if (error) {
            toast(error.message);
        }
    }, [error])

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])


    // login handler
    const login = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }


    // send reset email handler
    const sendResetEmail = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);

        // if(email!==''){
        //     toast('Reset email Sent')
        // }else{
        //     toast('Invalid email')
        // }

        if (resetError) {
            toast('Invalid email')
        }
        else {
            toast('Reset email Sent')
        }


    }

    return (
        <div className='form my-10'>
            <ToastContainer />
            <h1 className="text-4xl text-center mb-6 text-green-500">Login</h1>
            <form>
                <input type="email" name='email' ref={emailRef} placeholder='Your Email' required />
                <input type="password" name='password' ref={passwordRef} placeholder='Password' required />
                <input onClick={login} className='submit-btn' type="submit" value="Login" />

                <p>Forgot Password? <button onClick={sendResetEmail} style={{ color: "#2ad37e" }}>Reset Password</button> </p>

                <p>Have no account? <Link to={'/signup'} style={{ color: "#2ad37e", borderBottom: "2px solid #2ad37e" }}>Register here</Link> </p>
            </form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;