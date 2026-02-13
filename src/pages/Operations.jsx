import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Briefcase, PlaneTakeoff, ShieldAlert, Map, Layout, Calculator } from 'lucide-react';

const Operations = () => {
    const currentOperations = [
        { title: 'Trading', desc: 'Active buying and selling of high-value minerals.', icon: Briefcase },
        { title: 'Export Capability', desc: 'Fully licensed for international mineral export.', icon: PlaneTakeoff },
        { title: 'Government Concession', desc: 'Operating with full legal rights and support.', icon: ShieldAlert },
    ];

    const sites = [
        {
            name: 'Chicala Dialoang 1',
            size: '286 hectares',
            status: 'Exploration report completed',
            icon: Map
        },
        {
            name: 'Chicap Doalawarga 2',
            size: '9333.95 hectares',
            status: 'Under reserve estimation',
            icon: Layout
        },
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Our Operations"
                    subtitle="Strategic mineral trading and large-scale mining concessions in Angola."
                />

                {/* Current Operations */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-primaryGreen mb-8 border-l-4 border-primaryOrange pl-4">Current Capabilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {currentOperations.map((op, idx) => (
                            <Card key={idx}>
                                <div className="h-14 w-14 bg-beige rounded-2xl flex items-center justify-center mb-6">
                                    <op.icon className="text-primaryGreen" size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-primaryGreen mb-4">{op.title}</h4>
                                <p className="text-charcoal/70">{op.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Mining Sites */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-primaryGreen mb-8 border-l-4 border-primaryOrange pl-4">Mining Concessions</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {sites.map((site, idx) => (
                            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-beige flex flex-col md:flex-row">
                                <div className="md:w-1/3 bg-primaryGreen flex items-center justify-center p-12">
                                    <site.icon className="text-primaryOrange" size={80} />
                                </div>
                                <div className="p-8 md:w-2/3">
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

                {/* Process Card */}
                <div className="bg-primaryGreen rounded-3xl p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Calculator size={180} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-6">Tracking & Analytics</h3>
                        <p className="text-warmGray/70 max-w-2xl text-lg leading-relaxed mb-8">
                            We maintain a rigorous tracking system for all artisanal mining activity within our concessions.
                            Over the past 3 years, we have tracked over 10kg of gold, ensuring every gram is documented
                            from source to export.
                        </p>
                        <div className="inline-flex items-center space-x-2 text-primaryOrange font-bold italic">
                            <span>Dubai Export Market Registered</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Operations;
