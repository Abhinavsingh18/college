'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, GraduationCap, MapPin, BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react'
import { colleges } from '@/data/mock'

const Hero = () => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const [showResults, setShowResults] = React.useState(false)

    const filteredColleges = colleges.filter(college =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 4)

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/images/hero_bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 backdrop-blur-md border border-primary/30">
                        India's #1 Trusted Education Partner
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                        Find Your Way,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Shape Your Future
                        </span>
                    </h1>
                    <p className="text-xl text-slate-200 mb-8 max-w-xl leading-relaxed">
                        EduPath helps you discover the best colleges, exams, and courses. Get personalized counseling and apply with a single form.
                    </p>

                    {/* Search Bar Container */}
                    <div className="relative max-w-2xl group">
                        <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2 transition-all focus-within:ring-4 focus-within:ring-primary/20">
                            <div className="flex-1 flex items-center gap-3 px-4 w-full border-r border-slate-100 last:border-0 border-none md:border-solid">
                                <div className="relative">
                                    <Search className="text-slate-400" size={20} />
                                    <Sparkles className="absolute -top-1 -right-1 text-primary animate-pulse" size={10} />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value)
                                        setShowResults(e.target.value.length > 0)
                                    }}
                                    onFocus={() => setShowResults(searchQuery.length > 0)}
                                    placeholder="Ask our AI: Best colleges for Engineering..."
                                    className="w-full py-4 text-slate-800 outline-none placeholder:text-slate-400"
                                />
                            </div>
                            <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 whitespace-nowrap">
                                Search Now
                            </button>
                        </div>

                        {/* Dynamic Search Results */}
                        <AnimatePresence>
                            {showResults && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 right-0 mt-4 bg-white rounded-[2rem] shadow-2xl border border-slate-100 py-4 z-50 overflow-hidden"
                                >
                                    <div className="px-6 py-2 border-b border-slate-50 mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Top Instant Matches</span>
                                    </div>
                                    {filteredColleges.length > 0 ? (
                                        filteredColleges.map((college) => (
                                            <div key={college.id} className="px-6 py-4 hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between group">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                                                        <img src={college.image} alt="" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{college.name}</h4>
                                                        <p className="text-xs text-slate-500">{college.category} • {college.location}</p>
                                                    </div>
                                                </div>
                                                <ArrowRight size={18} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-8 py-10 text-center">
                                            <p className="text-slate-500">No matches found for "{searchQuery}"</p>
                                        </div>
                                    )}
                                    {searchQuery.length > 0 && (
                                        <div className="p-4 bg-slate-50 mt-2 mx-4 rounded-xl text-center">
                                            <button className="text-sm font-bold text-primary hover:underline">
                                                View all results for "{searchQuery}"
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-10">
                        {[
                            { icon: GraduationCap, label: '35k+ Colleges' },
                            { icon: BookOpen, label: '500+ Exams' },
                            { icon: MapPin, label: '100+ Cities' },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/90 font-medium">
                                <stat.icon className="text-primary" size={20} />
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Feature Cards / Floating Elements if needed */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:block"
                >
                    {/* Add a floating card design here if you want */}
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
