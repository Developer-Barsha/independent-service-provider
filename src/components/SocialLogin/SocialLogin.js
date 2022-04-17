import React from 'react';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div className='w-25 social'>
            <div className='social-line flex items-center justify-center gap-4'>
                <div className='line'></div>
                <p>or</p>
                <div className='line'></div>
            </div>

            <button className='social-btn'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />
                Continue With Google
            </button>

            <button className='social-btn'>
                <img src="https://pnggrid.com/wp-content/uploads/2021/04/facebook-white-circle-1024x1024.png" alt="" />
                Continue With Facebook
            </button>

            <button className='social-btn'>
                <img src="https://www.tethysplatform.org/images/github-icon.png" alt="" />
                Continue With GitHub
            </button>
        </div>
    );
};

export default SocialLogin;