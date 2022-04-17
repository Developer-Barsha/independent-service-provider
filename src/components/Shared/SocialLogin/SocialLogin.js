import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    useEffect(() => {
        if (error || gitError) {
            toast(error?.message || gitError?.message)
            console.log(error?.message || gitError?.message);
        }
    }, [error, gitUser])

    return (
        <section>
            <ToastContainer />


            <div className='w-25 social'>
                <div className='social-line flex items-center justify-center gap-4'>
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>

                <div className="btns flex justify-evenly">
                    <button onClick={() => signInWithGoogle()} className='social-btn'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />
                        Use Google
                    </button>

                    <button className='social-btn'>
                        <img src="https://pnggrid.com/wp-content/uploads/2021/04/facebook-white-circle-1024x1024.png" alt="" />
                        Use Facebook
                    </button>

                    <button onClick={() => signInWithGithub()} className='social-btn'>
                        <img src="https://www.tethysplatform.org/images/github-icon.png" alt="" />
                        Use GitHub
                    </button>
                </div>
            </div>
            
        </section>
    );
};

export default SocialLogin;