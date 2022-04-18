import React, { useState } from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <header>
            <h2 className='text-2xl'><span>Bloomy</span> Captures</h2>

            {/* header nav */}
            {showMenu && 
            <nav className=''>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/blogs'}>Blogs</CustomLink>
                <CustomLink to={'/signup'}>Signup</CustomLink>
                
                {
                user ? 
                <button onClick={()=>signOut(auth)} className='logout-btn'>Log Out</button>
                : 
                <CustomLink to={'/login'}>Login</CustomLink>
                }
            </nav>}

            {/* menu hide and show icon */}
            <button onClick={()=>setShowMenu(!showMenu)}>
                {showMenu ?
                    <XIcon width={30} />
                    :
                    <MenuAlt1Icon width={30} />
                }
            </button>

        </header>
    );
};

export default Header;