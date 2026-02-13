import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, Briefcase, Box, Phone } from 'lucide-react';

const MobileBottomNav = () => {
    const navItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: Info },
        { name: 'Operations', path: '/operations', icon: Briefcase },
        { name: 'Products', path: '/products', icon: Box },
        { name: 'Contact', path: '/contact', icon: Phone },
    ];

    return (
        <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
            <div className="bg-primaryGreen rounded-2xl shadow-2xl border border-white/10 px-4 py-3">
                <div className="flex justify-between items-center">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${isActive ? 'text-primaryOrange -translate-y-1' : 'text-white/70 hover:text-white'
                                }`
                            }
                        >
                            <item.icon size={20} />
                            <span className="text-[10px] font-medium uppercase tracking-wider">{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileBottomNav;
