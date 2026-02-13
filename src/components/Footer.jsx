import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white pt-16 pb-24 md:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 text-center md:text-left">
                        <Link to="/" className="text-2xl font-bold tracking-tighter">
                            MINERACAO<span className="text-primaryOrange">GLOBAL</span>
                        </Link>
                        <p className="mt-4 text-warmGray/60 text-sm leading-relaxed">
                            Leading mineral trading company in Angola, expanding into mining and refining operations.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primaryOrange">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-warmGray/70 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-warmGray/70 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/operations" className="text-warmGray/70 hover:text-white transition-colors">Operations</Link></li>
                            <li><Link to="/projects" className="text-warmGray/70 hover:text-white transition-colors">Projects</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primaryOrange">Our Minerals</h3>
                        <ul className="space-y-4">
                            <li className="text-warmGray/70">Gold & Diamonds</li>
                            <li className="text-warmGray/70">Tantalite & Tin</li>
                            <li className="text-warmGray/70">Cobalt & Tungsten</li>
                            <li className="text-warmGray/70">Critical Minerals</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primaryOrange">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start md:justify-start space-x-3 text-sm text-warmGray/70">
                                <MapPin size={18} className="text-primaryOrange shrink-0" />
                                <span>Huambo, Cidade Baixa, Casa Nr. 73, Angola</span>
                            </li>
                            <li className="flex items-center md:justify-start space-x-3 text-sm text-warmGray/70">
                                <Phone size={18} className="text-primaryOrange shrink-0" />
                                <span>+244 940 456 519</span>
                            </li>
                            <li className="flex items-center md:justify-start space-x-3 text-sm text-warmGray/70">
                                <Mail size={18} className="text-primaryOrange shrink-0" />
                                <span>mineracaoglobal1@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-warmGray/40">
                        &copy; {new Date().getFullYear()} Mineracao Global. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
