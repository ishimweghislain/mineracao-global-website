import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ to, children, primary = true, className = "" }) => {
    const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-block text-center";
    const primaryStyles = "bg-primaryOrange text-white hover:bg-white hover:text-primaryOrange border-2 border-primaryOrange";
    const secondaryStyles = "bg-primaryGreen text-white hover:bg-white hover:text-primaryGreen border-2 border-primaryGreen";

    return (
        <Link
            to={to}
            className={`${baseStyles} ${primary ? primaryStyles : secondaryStyles} ${className}`}
        >
            {children}
        </Link>
    );
};

export default CTAButton;
