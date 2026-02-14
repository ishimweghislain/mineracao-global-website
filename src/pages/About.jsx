import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { History, Target, Eye, ShieldCheck, Globe, TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-16 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="About Mineracao Global"
                    subtitle="A journey of excellence from mineral trading to large-scale mining and refining."
                />

                {/* History Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/imageofwebsite/gold-detector3.png"
                                alt="Representative African Mining Professional"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 text-primaryOrange mb-2">
                            <History size={24} />
                            <span className="font-bold tracking-widest uppercase text-sm">Established 2018</span>
                        </div>
                        <h3 className="text-2xl font-bold text-primaryGreen">Our History</h3>
                        <p className="text-charcoal/70 leading-relaxed">
                            Mineracao Global started its journey in 2018, just before the global pandemic. Our initial focus was on the exploration and trading of Tantalite, identifying major opportunities in the Angolan mineral market.
                        </p>
                        <p className="text-charcoal/70 leading-relaxed">
                            Post-pandemic, the company strategically moved its operations to Huambo, beginning a significant transition from pure exploration to comprehensive mining and refining. We have consistently focused on building a robust infrastructure and tracking artisanal mining to ensure a transparent supply chain.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <Card className="!bg-primaryGreen !text-white border-none">
                        <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                            <Target className="text-primaryOrange" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 !text-white">Our Mission</h3>
                        <p className="!text-white opacity-90 leading-relaxed">
                            To successfully transition from mineral exploration to full-scale mining and gold refining in Angola, setting a benchmark for ethical and sustainable practices in the region.
                        </p>
                    </Card>
                    <Card>
                        <div className="h-12 w-12 bg-primaryOrange/10 rounded-xl flex items-center justify-center mb-6">
                            <Eye className="text-primaryOrange" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-primaryGreen mb-4">Our Vision</h3>
                        <p className="text-charcoal/70 leading-relaxed">
                            To expand our footprint across Angola, becoming a leading producer of diamonds and critical minerals including tantalite, tin, cobalt, and tungsten.
                        </p>
                    </Card>
                </div>

                {/* Why Choose Us */}
                <div className="bg-beige/30 rounded-3xl p-12 md:p-16 border border-beige">
                    <h3 className="text-3xl font-bold text-center text-primaryGreen mb-12">Core Principles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="flex justify-center mb-6">
                                <ShieldCheck className="text-primaryOrange" size={48} />
                            </div>
                            <h4 className="text-xl font-bold text-primaryGreen mb-3">Integrity</h4>
                            <p className="text-charcoal/60 text-sm">We operate with absolute transparency and adhere to all government regulations.</p>
                        </div>
                        <div>
                            <div className="flex justify-center mb-6">
                                <Globe className="text-primaryOrange" size={48} />
                            </div>
                            <h4 className="text-xl font-bold text-primaryGreen mb-3">Sustainability</h4>
                            <p className="text-charcoal/60 text-sm">Our mining practices prioritize environmental preservation and community growth.</p>
                        </div>
                        <div>
                            <div className="flex justify-center mb-6">
                                <TrendingUp className="text-primaryOrange" size={48} />
                            </div>
                            <h4 className="text-xl font-bold text-primaryGreen mb-3">Excellence</h4>
                            <p className="text-charcoal/60 text-sm">We strive for the highest quality in mineral extraction and global trade relations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
