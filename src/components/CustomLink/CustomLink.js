import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    
    return (
        <div>
            <Link
                style={{ fontSize:'19px', color: match ? "#15db74" : "#000", fontWeight: match ? "bold" : "", borderBottom: match ? '2px solid #000' : "" }} 
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}


export default CustomLink;