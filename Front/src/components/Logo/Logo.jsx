// Logo.js
import React from 'react';
import './Logo.css';

const Logo = ({ className }) => {
    return (
        <img src="Logo_Completa.svg" alt="Logo" className={`logoCompleta ${className}`} />
    );
};

export default Logo;