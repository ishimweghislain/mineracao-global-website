import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Gem, Coins, ShieldCheck, Factory, Box, Recycle, Droplets, Zap, Filter, Globe } from 'lucide-react';

const Products = () => {
    const products = [
        {
            title: 'Refined Gold (Au)',
            desc: 'High-purity gold bars (18-24 carats) sourced from our premier Angolan concessions.',
            icon: Coins,
            image: '/imageofwebsite/gold-detector5.png'
        },
        {
            title: 'Tantalite Ore',
            desc: 'Strategic mineral used in global high-tech electronics and capacitive components.',
            icon: Gem,
            image: '/imageofwebsite/gold-detector6.png'
        },
    ];

    const processStages = [
        {
            title: 'Crushing & Screening',
            desc: 'Extracting valuable gold particles from cementing mud pie and rocks over 100mm using vibrating screens and trommels.',
            icon: Zap
        },
        {
            title: 'Desliming',
            desc: 'Removing sludge and material less than 0.1mm to prevent "floating gold" loss and ensure high-purity yield.',
            icon: Filter
        },
        {
            title: 'Gravity Separation',
            desc: 'The most economical method using Jigs, Shaking tables, and Spiral chutes to separate gold by density.',
            icon: Droplets
        },
        {
            title: 'Environmental Protection',
            desc: 'Direct discharge of harmless tailings and water recycling, significantly reducing civil engineering costs.',
            icon: Recycle
        }
    ];

    return (
        <div className="pt-16 pb-24 text-charcoal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Our Minerals & Processing"
                    subtitle="Premium mineral extraction with state-of-the-art beneficiation technology."
                />

                {/* Processing Workflow */}
                <div className="mb-24 bg-primaryGreen text-white rounded-[3rem] p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Factory size={300} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black mb-12 flex items-center">
                            <Factory className="mr-4 text-primaryOrange" />
                            Alluvial Gold Beneficiation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processStages.map((stage, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col items-start hover:bg-white/10 transition-colors group">
                                    <div className="h-12 w-12 bg-primaryOrange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <stage.icon className="text-white" size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3">{stage.title}</h4>
                                    <p className="text-sm opacity-70 leading-relaxed">{stage.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {products.map((product, idx) => (
                        <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-beige hover:border-primaryOrange transition-colors">
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primaryGreen/80 to-transparent flex items-end p-8">
                                    <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">{product.title}</h4>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="h-10 w-10 bg-beige rounded-lg flex items-center justify-center">
                                        <product.icon className="text-primaryGreen" size={24} />
                                    </div>
                                    <span className="text-xs font-bold text-primaryOrange uppercase tracking-widest">Premium Quality</span>
                                </div>
                                <p className="text-charcoal/70 leading-relaxed text-lg">
                                    {product.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quality Assurance */}
                <div className="bg-beige/30 rounded-3xl p-12 border border-beige flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <h3 className="text-3xl font-bold text-primaryGreen mb-6">Certified Excellence</h3>
                        <p className="text-charcoal/70 leading-relaxed text-lg">
                            All our Gold and Tantalite minerals undergo rigorous laboratory testing to verify carat levels and chemical composition. We maintain scrupulous adherence to the Kimberley Process and international metallurgical standards.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                    <ShieldCheck className="text-primaryOrange" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primaryGreen">Met-Label Certified</h4>
                                    <p className="text-sm text-charcoal/60">Rigorous laboratory verification of mineral purity.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                    <Globe className="text-primaryOrange" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primaryGreen">Market Served: Dubai</h4>
                                    <p className="text-sm text-charcoal/60">Fully compliant with the high standards of international markets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                        <img
                            src="/imageofwebsite/gold-detector4.png"
                            alt="Quality Assurance Lab"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
