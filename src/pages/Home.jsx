import React from 'react';
import { ArrowRight, Drill, Shield, Globe, Award, TrendingUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div className="relative min-h-[90vh] flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/imageofwebsite/gold-detector2png.png"
                        alt="Mining Site"
                        className="w-full h-full object-cover brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primaryGreen/60 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-2 bg-primaryOrange rounded-full text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
                            Exploration Report March 2025
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                            Engineering the Future of <span className="text-primaryOrange">Angolan Gold.</span>
                        </h1>
                        <p className="text-xl text-warmGray/80 mb-12 leading-relaxed max-w-2xl">
                            Mineracao Global is proud to present the official exploration report of the Chicala Cholohanga 1 concession, confirming over 500Kg of gold reserves and 20 years of sustainable mining potential.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                to="/projects"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primaryOrange hover:bg-white hover:text-primaryGreen text-white font-black rounded-full transition-all group shadow-2xl"
                            >
                                View Concession Report
                                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                            </Link>
                            <Link
                                to="/operations"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-bold rounded-full transition-all"
                            >
                                Operational Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Project Highlight */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-warmGray rounded-[3rem] p-8 md:p-16 border border-beige flex flex-col lg:flex-row gap-16 items-center shadow-sm">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-black text-primaryGreen mb-6 leading-tight">Featured: Chicala Cholohanga 01</h2>
                            <p className="text-charcoal/70 text-lg mb-8">
                                Located 50km North-East of Huambo, this 287-hectare concession represents a milestone in technical exploration. Our scrupulous adherence to legal procedures and professional mapping has confirmed high-grade secondary alluvial resources.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h4 className="text-primaryOrange font-bold text-3xl mb-1">531.6 Kg</h4>
                                    <p className="text-xs uppercase tracking-widest text-charcoal/40">Estimated Reserve</p>
                                </div>
                                <div>
                                    <h4 className="text-primaryOrange font-bold text-3xl mb-1">17+ Yrs</h4>
                                    <p className="text-xs uppercase tracking-widest text-charcoal/40">Operation Life</p>
                                </div>
                            </div>
                            <Link to="/projects" className="text-primaryGreen font-black flex items-center group">
                                EXPLORE TECHNICAL DATA
                                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/imageofwebsite/goldenrichment.png"
                                    alt="Gold Enrichment"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-primaryGreen text-white p-6 rounded-2xl shadow-xl border-4 border-white max-w-[200px]">
                                <MapPin className="text-primaryOrange mb-2" />
                                <p className="text-sm font-bold">Huambo Province, Chicala Municipality, Lumbungululu village</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Pillars */}
            <div className="py-24 bg-primaryGreen text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">Our Strategic Foundations</h2>
                        <div className="w-24 h-1 bg-primaryOrange mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="group text-center">
                            <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primaryOrange group-hover:rotate-12 transition-all duration-500">
                                <Shield className="text-white" size={36} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Legal Normalization</h3>
                            <p className="text-warmGray/60 leading-relaxed text-sm">Normalizing illegal exploitation through scrupulous legal procedures and official mining permits.</p>
                        </div>

                        <div className="group text-center">
                            <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primaryOrange group-hover:rotate-12 transition-all duration-500">
                                <TrendingUp className="text-white" size={36} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Economic Impact</h3>
                            <p className="text-warmGray/60 leading-relaxed text-sm">Contributing to poverty reduction through 95%+ local community job creation in operating provinces.</p>
                        </div>

                        <div className="group text-center">
                            <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primaryOrange group-hover:rotate-12 transition-all duration-500">
                                <Globe className="text-white" size={36} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Global Standards</h3>
                            <p className="text-warmGray/60 leading-relaxed text-sm">Developing optimal and efficient small-scale mining techniques for international trade.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-charcoal rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primaryGreen opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                                Ready to partner in the <br />
                                <span className="text-primaryOrange italic underline decoration-white/20">Angolan mineral revolution?</span>
                            </h2>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-12 py-5 bg-primaryOrange hover:bg-white hover:text-primaryGreen text-white font-black rounded-full transition-all text-lg shadow-2xl"
                            >
                                Connect with us
                                <ArrowRight className="ml-3" size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
