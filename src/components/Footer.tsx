import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl font-bold">EP</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Edu<span className="text-primary">Path</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            India's leading education portal, helping students find the right guidance for their bright future.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Top Courses</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {['B.Tech', 'MBA', 'MBBS', 'B.Com', 'B.Sc', 'LLB'].map((item) => (
                                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {['About Us', 'Contact Us', 'Careers', 'Latest News', 'Exams', 'Privacy Policy'].map((item) => (
                                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="text-primary shrink-0" size={18} />
                                <span>Sector 62, Noida, Uttar Pradesh, India</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span>+91 120 1234 5678</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span>hello@edupath.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-800 text-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} EduPath. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
