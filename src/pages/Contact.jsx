import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Phone, Mail, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Contact Us"
                    subtitle="Get in touch with our team for trading inquiries or partnership opportunities."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <h3 className="text-2xl font-bold text-primaryGreen mb-8">Office Details</h3>

                        <div className="flex items-start space-x-6">
                            <div className="h-12 w-12 rounded-xl bg-primaryOrange/10 flex items-center justify-center shrink-0">
                                <MapPin className="text-primaryOrange" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primaryGreen mb-1 text-lg">Our Location</h4>
                                <p className="text-charcoal/60 leading-relaxed">
                                    Huambo, Cidade Baixa<br />
                                    Rua do Tribunal e dos Capuchinlos<br />
                                    Casa Nr. 73, Angola
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="h-12 w-12 rounded-xl bg-primaryOrange/10 flex items-center justify-center shrink-0">
                                <Phone className="text-primaryOrange" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primaryGreen mb-1 text-lg">Phone Number</h4>
                                <p className="text-charcoal/60">+244 940 456 519</p>
                                <p className="text-xs text-charcoal/40 font-medium uppercase tracking-widest mt-1">Albert Mupenzi</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="h-12 w-12 rounded-xl bg-primaryOrange/10 flex items-center justify-center shrink-0">
                                <Mail className="text-primaryOrange" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primaryGreen mb-1 text-lg">Email Address</h4>
                                <p className="text-charcoal/60">mineracaoglobal1@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="h-12 w-12 rounded-xl bg-primaryOrange/10 flex items-center justify-center shrink-0">
                                <Globe className="text-primaryOrange" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primaryGreen mb-1 text-lg">Operational Area</h4>
                                <p className="text-charcoal/60">Angola & International Trade (Dubai)</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <h3 className="text-2xl font-bold text-primaryGreen mb-8">Send us a message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-primaryGreen mb-2 uppercase tracking-wide">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-beige bg-warmGray/30 focus:outline-none focus:ring-2 focus:ring-primaryOrange/50 focus:border-primaryOrange transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-primaryGreen mb-2 uppercase tracking-wide">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-beige bg-warmGray/30 focus:outline-none focus:ring-2 focus:ring-primaryOrange/50 focus:border-primaryOrange transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primaryGreen mb-2 uppercase tracking-wide">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-beige bg-warmGray/30 focus:outline-none focus:ring-2 focus:ring-primaryOrange/50 focus:border-primaryOrange transition-all appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Mineral Trading Partnership</option>
                                        <option>Mining Concession Inquiry</option>
                                        <option>Career Opportunities</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primaryGreen mb-2 uppercase tracking-wide">Message</label>
                                    <textarea
                                        rows="6"
                                        className="w-full px-4 py-3 rounded-xl border border-beige bg-warmGray/30 focus:outline-none focus:ring-2 focus:ring-primaryOrange/50 focus:border-primaryOrange transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-10 py-4 bg-primaryGreen text-white font-bold rounded-xl hover:bg-primaryOrange transition-all duration-300 flex items-center justify-center space-x-3 group shadow-lg"
                                >
                                    <span>Send Message</span>
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
