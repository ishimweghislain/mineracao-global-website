import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const AnnouncementBar = () => {
    return (
        <div className="bg-primaryOrange text-white py-2 overflow-hidden relative z-[60]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
                    <div className="flex items-center space-x-6 mb-2 md:mb-0">
                        <span className="flex items-center">
                            <Phone size={14} className="mr-2" />
                            +244 940 456 519
                        </span>
                        <span className="flex items-center hidden sm:flex">
                            <Mail size={14} className="mr-2" />
                            mineracaoglobal1@gmail.com
                        </span>
                    </div>

                    <div className="animate-pulse flex items-center bg-white/20 px-3 py-1 rounded-full whitespace-nowrap">
                        <span className="mr-2">Global Trading & Export Excellence</span>
                        <ArrowRight size={12} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;
