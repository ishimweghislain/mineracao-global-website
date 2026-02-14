import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Briefcase, PlaneTakeoff, ShieldAlert, Map, Layout, Calculator, Truck, Wrench, Users, Coffee, PieChart } from 'lucide-react';

const Operations = () => {
    const currentOperations = [
        { title: 'Trading', desc: 'Active buying and selling of high-value minerals.', icon: Briefcase },
        { title: 'Export Capability', desc: 'Fully licensed for international mineral export.', icon: PlaneTakeoff },
        { title: 'Government Concession', desc: 'Operating with full legal rights and support.', icon: ShieldAlert },
    ];

    const sites = [
        {
            name: 'Chicala Cholohanga 1',
            size: '287.32 hectares',
            status: 'Exploration report completed (March 2025)',
            icon: Map
        },
        {
            name: 'Huambo Reserve Sites',
            size: 'Strategic Concessions',
            status: 'Under reserve estimation',
            icon: Layout
        },
    ];

    const expenditures = [
        { item: 'Transport (Pick-up/Motorbikes)', cost: '$40,000' },
        { item: 'Geological Equipment (GPS/Compass)', cost: '$1,700' },
        { item: 'Site Tools (Picks/Spades/Barrows)', cost: '$1,020' },
        { item: 'Safety Gear (Boots/Helmets/Gloves)', cost: '$1,600' },
        { item: 'Fuel & Miscellaneous', cost: '$15,650' },
    ];

    const workforce = [
        { role: 'Site/Security Managers', count: 2 },
        { role: 'Geologists (Senior/Asst)', count: 2 },
        { role: 'Miners & Casuals', count: 25 },
        { role: 'Admin & Support Staff', count: 5 },
    ];

    return (
        <div className="pt-16 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Our Operations"
                    subtitle="Strategic mineral trading and large-scale mining concessions in Angola."
                />

                {/* Operations Specs */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    <div className="lg:col-span-2 bg-primaryGreen text-white p-12 rounded-[2.5rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                            <PieChart size={280} />
                        </div>
                        <h3 className="text-3xl font-black mb-8">Mining Project Specs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <div className="flex justify-between border-b border-white/20 pb-2">
                                <span className="text-warmGray/60">Shift Duration</span>
                                <span className="font-bold">8 Hours</span>
                            </div>
                            <div className="flex justify-between border-b border-white/20 pb-2">
                                <span className="text-warmGray/60">Days per Month</span>
                                <span className="font-bold">26 Days</span>
                            </div>
                            <div className="flex justify-between border-b border-white/20 pb-2">
                                <span className="text-warmGray/60">Washing Plant Capacity</span>
                                <span className="font-bold">10 ton/hour</span>
                            </div>
                            <div className="flex justify-between border-b border-white/20 pb-2">
                                <span className="text-warmGray/60">Strip Ratio</span>
                                <span className="font-bold">1/3</span>
                            </div>
                            <div className="flex justify-between border-b border-white/20 pb-2">
                                <span className="text-warmGray/60">Monthly Volume (ROM)</span>
                                <span className="font-bold">2,080 ton</span>
                            </div>
                            <div className="flex justify-between border-b border-white/20 pb-2">
                                <span className="text-warmGray/60">Monthly Production</span>
                                <span className="font-bold text-primaryOrange">2.70 Kg Gold</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primaryOrange text-white p-10 rounded-[2.5rem] flex flex-col justify-center">
                        <Users className="mb-6 scale-150 origin-left" size={32} />
                        <h4 className="text-2xl font-black mb-4">Human Capital</h4>
                        <p className="text-sm opacity-90 mb-8">Our Chicala 01 project employs a skilled local and expat workforce, ensuring optimal operations and community growth.</p>
                        <div className="space-y-3">
                            {workforce.map((w, idx) => (
                                <div key={idx} className="flex items-center text-xs bg-white/10 p-3 rounded-xl">
                                    <span className="font-black mr-2 bg-white text-primaryOrange px-2 py-0.5 rounded-md">{w.count}</span>
                                    <span className="uppercase tracking-widest font-bold">{w.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mining Sites */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-primaryGreen mb-8 border-l-4 border-primaryOrange pl-4">Mining Concessions</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {sites.map((site, idx) => (
                            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-beige flex flex-col md:flex-row">
                                <div className="md:w-1/3 bg-primaryGreen flex items-center justify-center p-12 shrink-0">
                                    <site.icon className="text-primaryOrange" size={80} />
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <span className="text-xs font-bold text-primaryOrange uppercase tracking-widest mb-2 block">Angola Site</span>
                                    <h4 className="text-2xl font-bold text-primaryGreen mb-4">{site.name}</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center text-charcoal/60">
                                            <Layout size={18} className="mr-3" />
                                            <span className="font-semibold">{site.size}</span>
                                        </div>
                                        <div className="inline-flex items-center px-4 py-2 bg-sage/20 text-primaryGreen rounded-full text-sm font-bold">
                                            {site.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expenditures Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-beige/40 p-10 rounded-3xl border border-beige">
                        <div className="flex items-center space-x-4 mb-8">
                            <Truck className="text-primaryOrange" size={32} />
                            <h3 className="text-2xl font-bold text-primaryGreen">Exploration Assets</h3>
                        </div>
                        <div className="space-y-4">
                            {expenditures.map((exp, idx) => (
                                <div key={idx} className="flex justify-between items-center group">
                                    <span className="text-charcoal/70 group-hover:text-primaryGreen transition-colors">{exp.item}</span>
                                    <span className="font-mono font-bold text-primaryGreen">{exp.cost}</span>
                                </div>
                            ))}
                            <div className="pt-6 border-t border-beige flex justify-between items-center">
                                <span className="font-black text-primaryGreen uppercase tracking-tighter">Total Expenditure</span>
                                <span className="text-2xl font-black text-primaryOrange">$62,150</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="p-8 border-2 border-primaryGreen rounded-3xl group hover:bg-primaryGreen transition-colors duration-500">
                            <Wrench className="text-primaryOrange mb-6 group-hover:scale-125 transition-transform" size={40} />
                            <h4 className="text-xl font-bold text-primaryGreen group-hover:text-white mb-4">Maintenance & Service</h4>
                            <p className="text-charcoal/60 group-hover:text-white/70">Estimated monthly maintenance cost of $3,397 ensures high equipment availability and operational uptime.</p>
                        </div>
                        <div className="p-8 bg-charcoal text-white rounded-3xl relative overflow-hidden">
                            <Coffee className="absolute top-0 right-0 p-8 opacity-10" size={100} />
                            <h4 className="text-xl font-bold mb-4">Facility & Support</h4>
                            <p className="text-sm opacity-60 leading-relaxed">Comprehensive budget for healthcare, communication, and on-site logistics to support our 30+ employees throughout the project lifecycle.</p>
                        </div>
                    </div>
                </div>

                {/* Tracking & Analytics */}
                <div className="bg-primaryGreen rounded-[3rem] p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Calculator size={180} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-4xl font-black mb-6">Financial Performance</h3>
                        <p className="text-warmGray/70 max-w-2xl text-lg leading-relaxed mb-8">
                            The Chicala 01 concession demonstrates a robust rate of return on investment at <span className="text-primaryOrange font-black italic underline">54%</span>, with a total net profit estimated at $8.95M over the project's lifespan.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white/10 px-6 py-2 rounded-full text-sm font-bold border border-white/20">Capex: $16.63M</div>
                            <div className="bg-white/10 px-6 py-2 rounded-full text-sm font-bold border border-white/20">Opex (per Kg): $42,259</div>
                            <div className="bg-primaryOrange px-6 py-2 rounded-full text-sm font-bold">Monthly Profit: $47,300</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Operations;
