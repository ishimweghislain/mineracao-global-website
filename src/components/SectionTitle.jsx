import React from 'react';

const SectionTitle = ({ title, subtitle, centered = false }) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primaryGreen mb-4">{title}</h2>
            {subtitle && <p className="text-charcoal/70 max-w-2xl text-lg leading-relaxed">{subtitle}</p>}
            <div className={`h-1.5 w-20 bg-primaryOrange mt-4 ${centered ? 'mx-auto' : ''} rounded-full`}></div>
        </div>
    );
};

export default SectionTitle;
