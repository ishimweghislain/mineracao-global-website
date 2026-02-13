import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import { ArrowRight, TrendingUp, Users, ShieldCheck, Globe, Box } from 'lucide-react';

const Home = () => {
    const stats = [
        { label: 'Founded', value: '2018', icon: Globe },
        { label: 'Office Workers', value: '6', icon: Users },
        { label: 'Field Workers', value: '8', icon: Users },
        { label: 'Gold Tracked', value: '10kg', icon: TrendingUp },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=1920"
                        alt="Mining Background"
                        className="w-full h-full object-cover brightness-[0.4]"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                            Trading Excellence in Gold and <span className="text-primaryOrange">Strategic Minerals</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-warmGray/90 mb-10 leading-relaxed font-light">
                            Mineracao Global is a mineral trading company operating in Angola with government concession and export capability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <CTAButton to="/operations">Our Operations</CTAButton>
                            <CTAButton to="/contact" primary={false}>Contact Us</CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center p-4 bg-beige/30 rounded-2xl mb-4 group-hover:bg-primaryOrange/10 transition-colors">
                                    <stat.icon className="text-primaryGreen group-hover:text-primaryOrange transition-colors" size={32} />
                                </div>
                                <div className="text-4xl font-bold text-primaryGreen mb-2">{stat.value}</div>
                                <div className="text-charcoal/60 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Brief */}
            <section className="py-24 bg-warmGray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionTitle
                                title="Building a Sustainable Future in Angola"
                                subtitle="From artisanal tracking to large-scale mining operations, we are committed to ethical mineral extraction and trading."
                            />
                            <p className="text-charcoal/70 mb-8 leading-relaxed">
                                Founded in 2018, Mineracao Global has quickly established itself as a reliable partner in the Angolan mineral sector. We currently manage two significant mines covering over 199,000 hectares.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center space-x-3">
                                    <ShieldCheck className="text-primaryOrange" size={20} />
                                    <span className="font-semibold text-primaryGreen">Government Licensed Operations</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <ShieldCheck className="text-primaryOrange" size={20} />
                                    <span className="font-semibold text-primaryGreen">Transparent Supply Chain</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <ShieldCheck className="text-primaryOrange" size={20} />
                                    <span className="font-semibold text-primaryGreen">Dubai Market Access</span>
                                </li>
                            </ul>
                            <CTAButton to="/about" className="inline-flex items-center group">
                                Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </CTAButton>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1525230071276-4a87f42f469e?auto=format&fit=crop&q=80&w=1000"
                                    alt="Modern African Mining Site"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-beige">
                                <div className="text-primaryOrange font-bold text-3xl mb-1">2 Mines</div>
                                <p className="text-sm text-charcoal/60 font-medium">Spanning across 1000ha & 199,533ha in Angola.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Minerals */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Strategic Minerals"
                        subtitle="We trade and export some of the most sought-after minerals in the global market."
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <div className="h-12 w-12 bg-primaryOrange/10 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp className="text-primaryOrange" />
                            </div>
                            <h3 className="text-2xl font-bold text-primaryGreen mb-4">Gold & Diamonds</h3>
                            <p className="text-charcoal/70 mb-6">High-purity gold and ethical diamonds sourced from our Angolan concessions.</p>
                            <Link to="/products" className="text-primaryOrange font-semibold flex items-center group">
                                View Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Card>
                        <Card>
                            <div className="h-12 w-12 bg-primaryOrange/10 rounded-xl flex items-center justify-center mb-6">
                                <Box className="text-primaryOrange" />
                            </div>
                            <h3 className="text-2xl font-bold text-primaryGreen mb-4">Critical Minerals</h3>
                            <p className="text-charcoal/70 mb-6">Tantalite, Tin, and Cobalt essential for global technology industries.</p>
                            <Link to="/products" className="text-primaryOrange font-semibold flex items-center group">
                                View Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Card>
                        <Card>
                            <div className="h-12 w-12 bg-primaryOrange/10 rounded-xl flex items-center justify-center mb-6">
                                <Globe className="text-primaryOrange" />
                            </div>
                            <h3 className="text-2xl font-bold text-primaryGreen mb-4">Global Trade</h3>
                            <p className="text-charcoal/70 mb-6">Fully licensed export capability serving major markets including Dubai.</p>
                            <Link to="/operations" className="text-primaryOrange font-semibold flex items-center group">
                                Our Process <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primaryGreen text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primaryOrange/10 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to partner with us?</h2>
                    <p className="text-warmGray/70 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Contact our expert team to learn more about our mineral trading and mining operations in Angola.
                    </p>
                    <CTAButton to="/contact" className="px-12 py-4 text-lg">Work With Us</CTAButton>
                </div>
            </section>
        </div>
    );
};

export default Home;
