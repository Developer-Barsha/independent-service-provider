import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import './Header.css'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header>
            <h2 className='text-2xl'><span>Bloomy</span> Captures</h2>

            {showMenu && 
            <nav className=''>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/banner'}>Home</CustomLink>
                <CustomLink to={'/login'}>Login</CustomLink>
            </nav>}

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