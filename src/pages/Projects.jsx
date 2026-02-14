import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Hammer, Truck, Factory, ShieldCheck, ArrowRight } from 'lucide-react';

const Projects = () => {
    const equipment = [
        { title: 'Modern Washing Plant', desc: 'For efficient mineral separation and processing.', icon: Factory },
        { title: 'Excavators', desc: 'Heavy-duty equipment for large-scale extraction.', icon: Truck },
    ];

    return (
        <div className="pt-16 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Current Projects"
                    subtitle="Transitioning from exploration to full-scale mining and production."
                />

                {/* Transition Strategy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <div className="inline-flex items-center px-4 py-2 bg-primaryOrange/10 text-primaryOrange rounded-full text-sm font-bold mb-6">
                            <Hammer size={16} className="mr-2" />
                            Infrastructure Development
                        </div>
                        <h3 className="text-3xl font-bold text-primaryGreen mb-6">Transition to Mining</h3>
                        <p className="text-charcoal/70 leading-relaxed mb-6">
                            Our primary objective is to evolve our current exploration activities into full-scale industrial mining.
                            This involves massive infrastructure development at our Huambo sites, including housing for workers
                            and on-site security facilities.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="h-6 w-6 rounded-full bg-primaryOrange flex-shrink-0 mt-1"></div>
                                <div>
                                    <h4 className="font-bold text-primaryGreen">Refinery Integration</h4>
                                    <p className="text-sm text-charcoal/60">Establishing localized gold refining capabilities to add value before export.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="h-6 w-6 rounded-full bg-primaryOrange flex-shrink-0 mt-1"></div>
                                <div>
                                    <h4 className="font-bold text-primaryGreen">Community Development</h4>
                                    <p className="text-sm text-charcoal/60">Building sustainable infrastructure for the local communities near our mines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
                            <img
                                src="/imageofwebsite/gold-detector2png.png"
                                alt="Industrial Mining"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Equipment Requirements */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-primaryGreen mb-12 text-center">Required Infrastructure & Equipment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {equipment.map((item, idx) => (
                            <Card key={idx} className="flex items-center space-x-8 text-left">
                                <div className="h-20 w-20 bg-beige rounded-2xl flex items-center justify-center shrink-0">
                                    <item.icon className="text-primaryGreen" size={40} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primaryGreen mb-2">{item.title}</h4>
                                    <p className="text-charcoal/70">{item.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Future Roadmap */}
                <div className="bg-warmGray rounded-3xl p-12 border border-beige">
                    <SectionTitle
                        title="Roadmap to 2028"
                        subtitle="Our vision for the next five years of growth."
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primaryGreen text-white flex items-center justify-center font-bold mb-6">1</div>
                            <h4 className="font-bold text-primaryGreen mb-2">Refining Plant</h4>
                            <p className="text-sm text-charcoal/60">Completion of the gold refining facility in Huambo.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primaryGreen text-white flex items-center justify-center font-bold mb-6">2</div>
                            <h4 className="font-bold text-primaryGreen mb-2">Expansion</h4>
                            <p className="text-sm text-charcoal/60">Beginning exploration in Diamond and Cobalt sectors.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primaryGreen text-white flex items-center justify-center font-bold mb-6">3</div>
                            <h4 className="font-bold text-primaryGreen mb-2">Global Leader</h4>
                            <p className="text-sm text-charcoal/60">Becoming the primary mineral exporter for Dubai high-tech markets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
