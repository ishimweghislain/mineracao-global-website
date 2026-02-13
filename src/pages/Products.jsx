import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Diamond, Database, ShieldCheck, Globe, FlaskConical } from 'lucide-react';

const Products = () => {
    const products = [
        { name: 'Gold', category: 'Precious Metals', icon: Database, color: 'text-amber-500' },
        { name: 'Diamond', category: 'Gemstones', icon: Diamond, color: 'text-blue-400' },
        { name: 'Tantalite', category: 'Strategic Minerals', icon: ShieldCheck, color: 'text-gray-500' },
        { name: 'Tin', category: 'Strategic Minerals', icon: ShieldCheck, color: 'text-slate-400' },
        { name: 'Cobalt', category: 'Battery Materials', icon: ShieldCheck, color: 'text-indigo-500' },
        { name: 'Tungsten', category: 'Industrial Metals', icon: ShieldCheck, color: 'text-orange-900' },
    ];

    return (
        <div className="pt-16 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Our Products"
                    subtitle="Exceptional quality minerals with a transparent and verified supply chain."
                />

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {products.map((product, idx) => (
                        <Card key={idx} className="group overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-4 rounded-xl bg-beige/50 ${product.color} group-hover:scale-110 transition-transform`}>
                                    <product.icon size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-primaryOrange bg-primaryOrange/10 px-3 py-1 rounded-full">
                                    Export Ready
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-primaryGreen mb-2">{product.name}</h3>
                            <p className="text-charcoal/50 text-sm font-medium uppercase tracking-wider mb-4 border-b border-beige pb-4">
                                {product.category}
                            </p>
                            <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                                Sourced from our concessions in Angola. Verified for purity and ethical compliance through the Angolan Government Laboratory.
                            </p>
                        </Card>
                    ))}
                </div>

                {/* Quality Standards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000"
                                alt="Quality Control Laboratory"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <h3 className="text-3xl font-bold text-primaryGreen">Quality & Assurance</h3>
                        <div className="flex items-start space-x-6">
                            <div className="h-12 w-12 rounded-full bg-primaryOrange/10 flex items-center justify-center shrink-0">
                                <FlaskConical className="text-primaryOrange" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-primaryGreen mb-2">Government Laboratory Testing</h4>
                                <p className="text-charcoal/70">All minerals undergo rigorous chemical and metallurgical analysis by authorized government labs.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="h-12 w-12 rounded-full bg-primaryOrange/10 flex items-center justify-center shrink-0">
                                <Globe className="text-primaryOrange" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-primaryGreen mb-2">Transparent Supply Chain</h4>
                                <p className="text-charcoal/70">From the mine site to the final export through the Angolan Government, every step is traced.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="h-12 w-12 rounded-full bg-primaryOrange/10 flex items-center justify-center shrink-0">
                                <ShieldCheck className="text-primaryOrange" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-primaryGreen mb-2">Market Served: Dubai</h4>
                                <p className="text-charcoal/70">Our products meet the high standards required for the United Arab Emirates and international markets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
