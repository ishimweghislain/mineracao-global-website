import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    Home,
    Info,
    Settings,
    FolderKanban,
    Package,
    Users,
    Mail,
    ChevronDown
} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: Info },
        { name: 'Operations', path: '/operations', icon: Settings },
        { name: 'Projects', path: '/projects', icon: FolderKanban },
        { name: 'Products', path: '/products', icon: Package },
        { name: 'Leadership', path: '/leadership', icon: Users },
        { name: 'Contact', path: '/contact', icon: Mail },
    ];

    return (
        <nav
            className={`sticky top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-primaryGreen/95 backdrop-blur-lg shadow-xl py-2'
                    : 'bg-primaryGreen py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex-shrink-0 flex items-center group"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primaryOrange/20 rounded-lg blur-md group-hover:bg-primaryOrange/30 transition-all duration-300"></div>
                            <h1 className="relative text-white font-black text-xl md:text-2xl tracking-tight px-2 py-1">
                                MINERACAO<span className="text-primaryOrange">GLOBAL</span>
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = location.pathname === link.path;

                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`
                                            relative px-4 py-2.5 rounded-lg text-sm font-semibold 
                                            transition-all duration-300 flex items-center gap-2 group
                                            ${isActive
                                                ? 'text-primaryOrange bg-white/10'
                                                : 'text-white hover:text-primaryOrange hover:bg-white/5'
                                            }
                                        `}
                                    >
                                        <Icon
                                            size={16}
                                            className={`
                                                transition-transform duration-300 
                                                ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                                            `}
                                        />
                                        <span>{link.name}</span>
                                        {isActive && (
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primaryOrange rounded-full"></div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`
                                relative p-2 rounded-lg text-white transition-all duration-300
                                ${isOpen ? 'bg-primaryOrange' : 'hover:bg-white/10'}
                            `}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-7 h-7 flex items-center justify-center">
                                <Menu
                                    size={24}
                                    className={`
                                        absolute transition-all duration-300 
                                        ${isOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}
                                    `}
                                />
                                <X
                                    size={24}
                                    className={`
                                        absolute transition-all duration-300 
                                        ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'}
                                    `}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    md:hidden overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="px-4 pt-4 pb-6 space-y-2 bg-primaryGreen/50 backdrop-blur-xl border-t border-white/10">
                    {navLinks.map((link, index) => {
                        const Icon = link.icon;
                        const isActive = location.pathname === link.path;

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold
                                    transition-all duration-300 transform
                                    ${isActive
                                        ? 'bg-primaryOrange text-white shadow-lg shadow-primaryOrange/30 scale-[1.02]'
                                        : 'text-white hover:bg-white/10 hover:scale-[1.02]'
                                    }
                                `}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                <div className={`
                                    p-2 rounded-lg transition-colors duration-300
                                    ${isActive ? 'bg-white/20' : 'bg-white/5'}
                                `}>
                                    <Icon size={20} />
                                </div>
                                <span>{link.name}</span>
                                {isActive && (
                                    <div className="ml-auto">
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Add animation keyframes */}
            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;