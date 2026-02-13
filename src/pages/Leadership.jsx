import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Award, Briefcase, GraduationCap, Mail } from 'lucide-react';

const Leadership = () => {
    const leaders = [
        {
            name: 'Albert Mupenzi',
            role: 'Founder & Managing Director',
            bio: 'Over 25 years of extensive experience in the mining and trading industry. Member of ITSC and TIC Conference.',
            avatar: 'AM'
        },
        {
            name: 'Frederico Kalulele',
            role: 'Marketing Manager',
            bio: 'Leading our global market expansion and strategic partnerships across Africa and Dubai.',
            avatar: 'FK'
        },
        {
            name: 'Shimuto Bartholomeo',
            role: 'Secretary',
            bio: 'Ensuring operational efficiency and administrative excellence across our regional offices.',
            avatar: 'SB'
        },
        {
            name: 'Adriana Amara',
            role: 'Accountant',
            bio: 'Managing our financial systems and ensuring transparency in all our trading operations.',
            avatar: 'AA'
        }
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <SectionTitle
                    title="Our Leadership"
                    subtitle="Guided by decades of experience and a vision for Angolan mineral excellence."
                />

                {/* Founder Spotlights */}
                <div className="mb-24 bg-primaryGreen rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 relative h-96 lg:h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                            alt="Albert Mupenzi"
                            className="w-full h-full object-cover grayscale brightness-90"
                        />
                        <div className="absolute inset-0 bg-primaryGreen/40"></div>
                    </div>
                    <div className="lg:w-3/5 p-12 lg:p-16 text-white self-center">
                        <span className="text-primaryOrange font-bold tracking-widest uppercase text-xs mb-4 block">Founder & Managing Director</span>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Albert Mupenzi</h3>
                        <p className="text-warmGray/80 text-lg leading-relaxed mb-8">
                            With more than 25 years of experience in the global mineral industry, Albert Mupenzi has led Mineracao Global with a focus on integrity and innovation. As a member of the ITSC and a regular attendee of the TIC Conference, he brings global best practices to the Angolan mining sector.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                <Award className="text-primaryOrange" size={24} />
                                <span className="text-sm font-semibold">ITSC Member</span>
                            </div>
                            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                <GraduationCap className="text-primaryOrange" size={24} />
                                <span className="text-sm font-semibold">TIC Conference Member</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Leaders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {leaders.slice(1).map((leader, idx) => (
                        <Card key={idx} className="text-center group">
                            <div className="w-24 h-24 bg-beige mx-auto rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-primaryGreen">{leader.avatar}</span>
                            </div>
                            <h4 className="text-xl font-bold text-primaryGreen mb-2">{leader.name}</h4>
                            <p className="text-sm font-bold text-primaryOrange uppercase tracking-widest mb-4">{leader.role}</p>
                            <p className="text-charcoal/60 text-sm leading-relaxed mb-6">{leader.bio}</p>
                            <div className="flex justify-center space-x-4">
                                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-warmGray text-primaryGreen hover:bg-primaryGreen hover:text-white transition-colors">
                                    <Mail size={18} />
                                </a>
                                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-warmGray text-primaryGreen hover:bg-primaryGreen hover:text-white transition-colors">
                                    <Briefcase size={18} />
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leadership;
