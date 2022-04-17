import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    // color: '#13db74', 
    return (
        <div>
            <Link
                style={{ fontSize:'19px', color: match ? "#15db74" : "#000", fontWeight: match ? "bold" : "" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}


export default CustomLink;