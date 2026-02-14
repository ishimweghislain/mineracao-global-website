import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { Hammer, MapPin, Pickaxe, BarChart3, Ruler, ListOrdered, Droplets, Layers } from 'lucide-react';

const Projects = () => {
    const [activeRiver, setActiveRiver] = useState('river2');

    const coordinates = [
        { id: '01', x: '623806,983', y: '8594175,529' },
        { id: '02', x: '622658,847', y: '8594154,654' },
        { id: '03', x: '623128,539', y: '8596482,239' },
        { id: '04', x: '624621,111', y: '8596244,378' },
    ];

    const river2Results = [
        { id: 'R2Pt01', lon: '622958', lat: '8594663', alt: '1768 m', deep: '3 m', sample: '50 Kg', result: '64 ppm', comment: 'Placer with Lateritic soil' },
        { id: 'R2Pt02', lon: '623011', lat: '8594671', alt: '1770 m', deep: '3 m', sample: '50 Kg', result: '73 ppm', comment: 'Placer with Lateritic soil' },
        { id: 'R2Pt03', lon: '623060', lat: '8594671', alt: '1780 m', deep: '4 m', sample: '50 Kg', result: '67 ppm', comment: 'Placer with white clay soil' },
        { id: 'R2Pt04', lon: '623103', lat: '8594702', alt: '1789 m', deep: '3.5 m', sample: '75 Kg', result: '82 ppm', comment: 'Placer with Lateritic soil' },
        { id: 'R2Pt10', lon: '623394', lat: '8594685', alt: '1809 m', deep: '3 m', sample: '50 Kg', result: '70 ppm', comment: 'Placer with white sands' },
        { id: 'R2Pt12', lon: '623471', lat: '8594697', alt: '1813 m', deep: '4 m', sample: '150 Kg', result: '202 ppm', comment: 'Placer with white sands' },
        { id: 'R2Pt25', lon: '623839', lat: '8595241', alt: '1813 m', deep: '3 m', sample: '100 Kg', result: '128 ppm', comment: 'Placer with white sands' },
        { id: 'R2Pt35', lon: '624162', lat: '8595660', alt: '1810 m', deep: '4 m', sample: '100 Kg', result: '179 ppm', comment: 'Placer with white sands' },
        { id: 'R2Pt41', lon: '624375', lat: '8595892', alt: '1806 m', deep: '4 m', sample: '75 Kg', result: '155 ppm', comment: 'Placer with white sands' },
        { id: 'R2Pt49', lon: '624626', lat: '8596236', alt: '1802 m', deep: '4 m', sample: '300 Kg', result: '455 ppm', comment: 'Placer with white sands' },
    ];

    const river1Results = [
        { id: 'R1Pt02', lon: '624527', lat: '8596250', alt: '1805 m', deep: '3 m', sample: '125 Kg', result: '181 ppm', comment: 'Placer with white sands' },
        { id: 'R1Pt04', lon: '624200', lat: '8596314', alt: '1813 m', deep: '4 m', sample: '150 Kg', result: '265 ppm', comment: 'Placer with white sands' },
        { id: 'R1Pt09', lon: '623920', lat: '8596302', alt: '1820 m', deep: '4 m', sample: '100 Kg', result: '160 ppm', comment: 'Placer with white sands' },
        { id: 'R1Pt12', lon: '623740', lat: '8596311', alt: '1825 m', deep: '3.5 m', sample: '100 Kg', result: '120 ppm', comment: 'Placer with white sands' },
        { id: 'R1Pt16', lon: '623530', lat: '8596384', alt: '1834 m', deep: '4 m', sample: '150 Kg', result: '265 ppm', comment: 'Placer with white clay soil' },
        { id: 'R1Pt18', lon: '623440', lat: '8596435', alt: '1837 m', deep: '3.5 m', sample: '200 Kg', result: '300 ppm', comment: 'Placer with white clay soil' },
    ];

    return (
        <div className="pt-16 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Chicala Cholohanga 01 Project"
                    subtitle="Gold Exploration and Development Concession in Huambo, Angola."
                />

                {/* Project Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-primaryOrange/10 text-primaryOrange rounded-full text-sm font-bold mb-6">
                                <Pickaxe size={16} className="mr-2" />
                                Gold Mine Concession
                            </div>
                            <h3 className="text-4xl font-extrabold text-primaryGreen mb-6 leading-tight">Exploration Phase & Findings</h3>
                            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                                The Chicala Cholohanga 1 site is located North-East of Huambo (50km). It covers an area of 287.32 hectares and consists of two main rivers where illegal artisanal exploitation previously confirmed the presence of high-quality alluvial gold (18-23 carats).
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-beige/30 rounded-2xl border border-beige">
                                    <h5 className="text-xs font-bold text-primaryOrange uppercase mb-1">Total Reserves</h5>
                                    <p className="text-2xl font-black text-primaryGreen">531.61 Kg</p>
                                    <p className="text-[10px] text-charcoal/40 uppercase">Estimated Gold Content</p>
                                </div>
                                <div className="p-4 bg-beige/30 rounded-2xl border border-beige">
                                    <h5 className="text-xs font-bold text-primaryOrange uppercase mb-1">Mine Life</h5>
                                    <p className="text-2xl font-black text-primaryGreen">17 Years</p>
                                    <p className="text-[10px] text-charcoal/40 uppercase">Project Duration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-beige relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <MapPin size={120} />
                        </div>
                        <h4 className="text-xl font-bold text-primaryGreen mb-6 flex items-center">
                            <Ruler className="mr-3 text-primaryOrange" />
                            Boundary Coordinates
                        </h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-beige text-primaryOrange text-left">
                                        <th className="pb-3 font-bold uppercase tracking-wider">Summit</th>
                                        <th className="pb-3 font-bold uppercase tracking-wider">X Coordinate</th>
                                        <th className="pb-3 font-bold uppercase tracking-wider">Y Coordinate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coordinates.map((coord) => (
                                        <tr key={coord.id} className="border-b border-beige/50 last:border-none">
                                            <td className="py-3 font-bold text-primaryGreen">{coord.id}</td>
                                            <td className="py-3 font-mono text-charcoal/70">{coord.x}</td>
                                            <td className="py-3 font-mono text-charcoal/70">{coord.y}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6 text-[11px] text-charcoal/40 italic">System: UTM WGS 84, Zone 33S</p>
                    </div>
                </div>

                {/* Geological Environment */}
                <div className="mb-24">
                    <div className="flex items-center space-x-4 mb-12">
                        <div className="h-1 bg-primaryOrange shrink-0 w-24"></div>
                        <h3 className="text-2xl font-bold text-primaryGreen uppercase tracking-widest leading-none">Local Geology & Soil layers</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="bg-charcoal text-white border-none">
                            <h4 className="font-bold text-primaryOrange mb-2">Layer 1: Overburden</h4>
                            <p className="text-sm text-white font-medium">Black clay soil with grasses, average thickness of 1.5m along rivers.</p>
                        </Card>
                        <Card className="bg-primaryGreen text-white border-none">
                            <h4 className="font-bold text-primaryOrange mb-2">Layer 2: Lateritic</h4>
                            <p className="text-sm text-white font-medium">Follows the clay soil, roughly 1m of thickness.</p>
                        </Card>
                        <Card className="bg-beige border-none">
                            <h4 className="font-bold text-primaryGreen mb-2">Layer 3: Placer</h4>
                            <p className="text-sm text-charcoal/70">Mineralized gravels, thickness varies from 0.5m to 2m. High gold potential.</p>
                        </Card>
                        <Card className="bg-white border-beige">
                            <h4 className="font-bold text-primaryGreen mb-2">Basement</h4>
                            <p className="text-sm text-charcoal/70">Precambrian basement rocks underneath the sedimentary cover.</p>
                        </Card>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-warmGray rounded-[2rem] p-8 md:p-12 border border-beige mb-24 transition-all duration-500 shadow-inner">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h3 className="text-3xl font-black text-primaryGreen mb-2">Exploration Results</h3>
                            <p className="text-charcoal/60">Sampling and processing data from strategic pits.</p>
                        </div>
                        <div className="flex bg-beige p-1 rounded-xl">
                            <button
                                onClick={() => setActiveRiver('river2')}
                                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeRiver === 'river2' ? 'bg-primaryGreen text-white shadow-lg' : 'text-primaryGreen hover:bg-white/50'}`}
                            >
                                River 02
                            </button>
                            <button
                                onClick={() => setActiveRiver('river1')}
                                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeRiver === 'river1' ? 'bg-primaryGreen text-white shadow-lg' : 'text-primaryGreen hover:bg-white/50'}`}
                            >
                                River 01
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto rounded-2xl bg-white border border-beige shadow-sm">
                        <table className="w-full text-sm">
                            <thead className="bg-beige/20 text-primaryGreen">
                                <tr className="text-left font-bold border-b border-beige">
                                    <th className="p-4 px-6 uppercase tracking-wider text-[11px]">PIT ID</th>
                                    <th className="p-4 px-6 uppercase tracking-wider text-[11px]">Depth</th>
                                    <th className="p-4 px-6 uppercase tracking-wider text-[11px]">Sample</th>
                                    <th className="p-4 px-6 uppercase tracking-wider text-[11px] text-primaryOrange">Result</th>
                                    <th className="p-4 px-6 uppercase tracking-wider text-[11px]">Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(activeRiver === 'river2' ? river2Results : river1Results).map((pit) => (
                                    <tr key={pit.id} className="border-b border-beige/30 hover:bg-beige/10 transition-colors">
                                        <td className="p-4 px-6 font-bold text-primaryGreen">{pit.id}</td>
                                        <td className="p-4 px-6 text-charcoal/60">{pit.deep}</td>
                                        <td className="p-4 px-6 text-charcoal/60">{pit.sample}</td>
                                        <td className="p-4 px-6 font-mono font-bold text-primaryOrange">{pit.result}</td>
                                        <td className="p-4 px-6 text-xs text-charcoal/50 italic">{pit.comment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white/50 border border-white rounded-2xl">
                            <h5 className="font-bold text-primaryGreen mb-4 flex items-center">
                                <BarChart3 className="mr-2 text-primaryOrange" size={18} />
                                Technical Recovery Conclusion
                            </h5>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-charcoal/60">River 01 average yield:</span>
                                    <span className="font-bold text-primaryGreen">1.373 g/ton</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-charcoal/60">River 02 average yield:</span>
                                    <span className="font-bold text-primaryGreen">1.333 g/ton</span>
                                </div>
                                <div className="pt-3 border-t border-beige flex justify-between">
                                    <span className="text-primaryGreen font-bold">Total Avg Recovery Estimated:</span>
                                    <span className="font-black text-primaryOrange">1.014 g/ton (75% rate)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 border-2 border-dashed border-beige rounded-2xl opacity-60">
                            <p className="text-xs text-center leading-relaxed">
                                Detailed mapping using pits and trenches confirmed secondary deposit parameters.
                                Sampling and processing of structures allow for high-confidence reserve estimation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reserve Estimation Table */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-primaryGreen mb-8 text-center uppercase tracking-tighter">Reserves Calculation (Summary)</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-primaryGreen text-white p-10 rounded-3xl relative overflow-hidden group">
                            <Layers className="absolute -bottom-10 -right-10 text-white/5 group-hover:scale-110 transition-transform duration-700" size={240} />
                            <h4 className="text-primaryOrange font-bold uppercase tracking-widest mb-2">River 01</h4>
                            <div className="space-y-4 relative z-10">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Volume (L x W x T)</span>
                                    <span className="font-mono">56,250 m³</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Placer Density</span>
                                    <span className="font-mono">3</span>
                                </div>
                                <div className="text-3xl font-black pt-4">231.69 Kg Gold</div>
                                <p className="text-xs opacity-60">Calculated as: Volume x Density x Recovery Rate</p>
                            </div>
                        </div>
                        <div className="bg-warmGray border border-beige p-10 rounded-3xl relative overflow-hidden group">
                            <Layers className="absolute -bottom-10 -right-10 text-charcoal/5 group-hover:scale-110 transition-transform duration-700" size={240} />
                            <h4 className="text-primaryOrange font-bold uppercase tracking-widest mb-2">River 02</h4>
                            <div className="space-y-4 relative z-10">
                                <div className="flex justify-between border-b border-charcoal/10 pb-2 text-charcoal/60">
                                    <span>Volume (L x W x T)</span>
                                    <span className="font-mono text-primaryGreen">75,000 m³</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/10 pb-2 text-charcoal/60">
                                    <span>Placer Density</span>
                                    <span className="font-mono text-primaryGreen">3</span>
                                </div>
                                <div className="text-3xl font-black pt-4 text-primaryGreen">299.92 Kg Gold</div>
                                <p className="text-xs text-charcoal/40">Calculated as: Volume x Density x Recovery Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 bg-primaryOrange text-white p-6 rounded-2xl text-center shadow-lg transform -rotate-1">
                        <p className="text-lg font-bold uppercase tracking-widest">Total Site Reserve: 531.61 Kg of Gold</p>
                    </div>
                </div>

                {/* Final Roadmap */}
                <div className="flex flex-col md:flex-row items-center justify-between p-12 bg-charcoal rounded-[3rem] text-white">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-3xl font-bold mb-4 italic">Ready for Semi-Mechanized Operation</h3>
                        <p className="opacity-60 max-w-lg">
                            The Chicala 01 Alluvial deposit is confirmed to support operations for nearly 20 years.
                            Research for primary resources will follow after the bankable feasibility study.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="px-10 py-5 bg-primaryOrange rounded-full font-black uppercase text-sm hover:scale-105 transition-transform shadow-2xl flex items-center group"
                    >
                        Inquire About Project
                        <Pickaxe className="ml-3 group-hover:rotate-45 transition-transform" size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
