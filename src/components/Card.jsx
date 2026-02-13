import React from 'react';

const Card = ({ children, className = "" }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-beige/50 ${className}`}>
            {children}
        </div>
    );
};

export default Card;
