import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Award, Briefcase, GraduationCap, Mail, ShieldCheck } from 'lucide-react';

const Leadership = () => {
    const leaders = [
        {
            name: 'Albert Mupenzi',
            role: 'Managing Director',
            bio: 'Over 25 years of extensive experience in the mining and trading industry. Directing overall strategic vision with a 25% project contribution.',
            avatar: 'AM'
        },
        {
            name: 'Donat Kankonde',
            role: 'Senior Geologist',
            bio: 'Expert exploration geologist responsible for detailed mapping and 50% technical project contribution.',
            avatar: 'DK'
        },
        {
            name: 'Frederick Kalufele',
            role: 'Site Supervisor',
            bio: 'Leading on-site operations and personnel supervision with extensive field experience.',
            avatar: 'FK'
        },
        {
            name: 'Wilson Cameia',
            role: 'Legal Expert',
            bio: 'Specialist lawyer ensuring scrupulous adherence to Angolan mining legislation and permits.',
            avatar: 'WC'
        },
        {
            name: 'Anselmo Cameia',
            role: 'Accountant',
            bio: 'Managing financial audit trail and transparency for all mining and trading activities.',
            avatar: 'AC'
        },
        {
            name: 'Bartolomeo Gomes',
            role: 'Administrator',
            bio: 'Coordinating administrative excellence and logistics across our regional offices.',
            avatar: 'BG'
        }
    ];

    return (
        <div className="pt-16 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <SectionTitle
                    title="Key People & Leadership"
                    subtitle="A multidisciplinary team dedicated to the success of the Chicala gold project."
                />

                {/* Founder Spotlights */}
                <div className="mb-24 bg-primaryGreen rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
                    <div className="lg:w-2/5 relative h-96 lg:h-auto overflow-hidden">
                        <img
                            src="/imageofwebsite/mupenzi.jpeg"
                            alt="Albert Mupenzi"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-primaryGreen/20"></div>
                    </div>
                    <div className="lg:w-3/5 p-12 lg:p-16 text-white self-center">
                        <div className="inline-flex items-center space-x-2 text-primaryOrange font-bold tracking-widest uppercase text-xs mb-6 px-4 py-1 bg-white/5 rounded-full">
                            <ShieldCheck size={14} />
                            <span>Statutory Representative</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter decoration-primaryOrange decoration-4">Albert Mupenzi</h3>
                        <p className="text-warmGray/80 text-xl leading-relaxed mb-10 font-light">
                            Representing Mineracao Global with more than 25 years of experience, Albert Mupenzi ensures all information provided in our technical reports is accurate and scrupulously follows Angola's mining legislation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                                <Award className="text-primaryOrange group-hover:scale-110 transition-transform" size={28} />
                                <span className="text-sm font-bold uppercase tracking-wider">ITSC Member</span>
                            </div>
                            <div className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                                <GraduationCap className="text-primaryOrange group-hover:scale-110 transition-transform" size={28} />
                                <span className="text-sm font-bold uppercase tracking-wider">TIC Conference</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leaders.slice(1).map((leader, idx) => (
                        <Card key={idx} className="!bg-white !border-beige rounded-[2rem] p-10 group hover:shadow-2xl transition-all">
                            <div className="w-20 h-20 bg-primaryGreen mx-auto rounded-3xl flex items-center justify-center mb-8 border-4 border-beige shadow-inner group-hover:rotate-6 transition-transform">
                                <span className="text-2xl font-black text-white">{leader.avatar}</span>
                            </div>
                            <h4 className="text-2xl font-black text-primaryGreen mb-2 tracking-tight">{leader.name}</h4>
                            <p className="text-sm font-black text-primaryOrange uppercase tracking-[0.2em] mb-6">{leader.role}</p>
                            <p className="text-charcoal/60 text-sm leading-relaxed mb-8">{leader.bio}</p>
                            <div className="flex justify-center space-x-4">
                                <button className="h-12 w-12 flex items-center justify-center rounded-2xl bg-warmGray text-primaryGreen hover:bg-primaryOrange hover:text-white transition-all shadow-sm">
                                    <Mail size={20} />
                                </button>
                                <button className="h-12 w-12 flex items-center justify-center rounded-2xl bg-warmGray text-primaryGreen hover:bg-primaryGreen hover:text-white transition-all shadow-sm">
                                    <Briefcase size={20} />
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leadership;
