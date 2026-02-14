import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { History, Target, Eye, ShieldCheck, Globe, TrendingUp, Map, Compass } from 'lucide-react';

const About = () => {
    const geologicalUnits = [
        { title: 'Quaternary to Tertiary Sedimentary', desc: 'Comprising Sand, Quartzic Sandstone, Gravel and Clay. Contains secondary mineral resources.' },
        { title: 'Pleistocene to Cretaceous Marine', desc: 'Coastal basins on the western margin. Primary sources of Oil and Gas.' },
        { title: 'Mesozoic to Paleozoic/Karoo', desc: 'Includes Kimberlites and Carbonatites along the Lucapa Corridor. Sources of Diamond.' },
        { title: 'Upper Proterozoic Fold Belts', desc: 'Pan African Age. Characterized by base metal mineralization and industrial minerals.' },
        { title: 'Lower Proterozoic to Archaean', desc: 'Granite-gneissic terrain and greenstone belts present in South-Central Angola.' },
    ];

    return (
        <div className="pt-16 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="About Mineracao Global"
                    subtitle="A journey of excellence from mineral trading to large-scale mining and refining."
                />

                {/* Regional Context Section */}
                <div className="bg-primaryGreen text-white rounded-3xl p-8 md:p-12 mb-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Map size={300} />
                    </div>
                    <div className="relative z-10 max-w-4xl">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="h-10 w-10 bg-primaryOrange rounded-lg flex items-center justify-center">
                                <Globe className="text-white" size={24} />
                            </div>
                            <h3 className="text-3xl font-bold">Angola: A Land of Mineral Wealth</h3>
                        </div>
                        <p className="text-warmGray/80 text-lg leading-relaxed mb-8">
                            Angola, located on the western coast of southern Africa, is blessed with an inter-tropical climate and a terrain rich in untapped potential. Most of the country's mineral potential, apart from Oil and Gas, is related to its Precambrian shield which outcrops over a large part of the country.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                                <h4 className="font-bold text-primaryOrange mb-3 uppercase tracking-wider">National Context</h4>
                                <p className="opacity-80">With Huambo as the third most populous city and a main hub on the Benguela Railway, Angola is strategically positioned for mineral export to global markets.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                                <h4 className="font-bold text-primaryOrange mb-3 uppercase tracking-wider">Mineralogy</h4>
                                <p className="opacity-80">Beyond Oil and Diamonds, Angola hosts Niobium, Tantalum, Fluorite, Barite, and Rare Earths, with Greenstone belts offering significant gold occurrences.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Geology Section */}
                <div className="mb-24">
                    <div className="flex items-center justify-center space-x-3 mb-12 text-center">
                        <Compass className="text-primaryOrange" size={32} />
                        <h3 className="text-3xl font-bold text-primaryGreen uppercase tracking-tighter">Regional Geological Units</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {geologicalUnits.map((unit, idx) => (
                            <div key={idx} className="group p-8 bg-white rounded-2xl border border-beige hover:border-primaryOrange transition-colors shadow-sm">
                                <span className="text-4xl font-black text-primaryOrange/10 group-hover:text-primaryOrange/20 transition-colors mb-4 block italic">0{idx + 1}</span>
                                <h4 className="text-lg font-bold text-primaryGreen mb-3">{unit.title}</h4>
                                <p className="text-charcoal/60 text-sm leading-relaxed">{unit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

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
                            Mineracao Global started its journey in 2018, Identifying major opportunities in the Angolan mineral market.
                            The geological environment and indications of mineralization in the Chicala 01 concession are favorable for development of high-quality mineral deposits.
                        </p>
                        <p className="text-charcoal/70 leading-relaxed">
                            We scrupulously follow all legal procedures for obtaining official mining permits, aiming to normalize and legalize exploitation while following national mineral resources agency guidelines.
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
                            To facilitate optimal and efficient operations by developing the best techniques of small-scale mining, while creating jobs for the local community to avoid illegal activities.
                        </p>
                    </Card>
                    <Card>
                        <div className="h-12 w-12 bg-primaryOrange/10 rounded-xl flex items-center justify-center mb-6">
                            <Eye className="text-primaryOrange" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-primaryGreen mb-4">Our Vision</h3>
                        <p className="text-charcoal/70 leading-relaxed">
                            To become one of the leading mining companies in Angola through scrupulous adherence to legal procedures and contribution to the national economy.
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
