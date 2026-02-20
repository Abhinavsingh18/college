'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { colleges } from '@/data/mock'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Filter, Search, MapPin, Star, ArrowRight, ListFilter } from 'lucide-react'

const CollegesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    const categories = ['All', 'Engineering', 'Management', 'Medical', 'Science', 'Arts']

    const filteredColleges = colleges.filter(college => {
        const matchesCategory = selectedCategory === 'All' || college.category === selectedCategory
        const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header */}
            <div className="bg-slate-900 pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Top Colleges</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10 italic">
                        "Your journey to excellence begins with the right choice."
                    </p>

                    <div className="max-w-3xl mx-auto flex gap-4 bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/10">
                        <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/5">
                            <Search className="text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name or location..."
                                className="bg-transparent text-white outline-none w-full placeholder:text-slate-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-4 gap-10">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                        <div className="flex items-center gap-2 mb-6">
                            <ListFilter className="text-primary" size={20} />
                            <h3 className="font-bold text-slate-900">Filter by Category</h3>
                        </div>
                        <div className="space-y-3">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${selectedCategory === cat
                                            ? 'bg-primary text-white shadow-md'
                                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-orange-500 p-8 rounded-[2rem] text-white overflow-hidden relative">
                        <div className="relative z-10">
                            <h4 className="font-bold text-xl mb-4 leading-tight">Need expert help choosing?</h4>
                            <p className="text-white/80 text-sm mb-6">Get free personalized counseling from our career experts.</p>
                            <button className="w-full bg-white text-primary py-3 rounded-xl font-bold hover:shadow-xl transition-all">
                                Talk to Expert
                            </button>
                        </div>
                        <Filter className="absolute -bottom-6 -right-6 text-white/10" size={120} />
                    </div>
                </div>

                {/* Results Grid */}
                <div className="lg:col-span-3">
                    <div className="flex justify-between items-center mb-10">
                        <span className="text-slate-500 font-medium">Showing <span className="text-slate-900 font-bold">{filteredColleges.length}</span> colleges</span>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm cursor-pointer">
                            <span className="text-sm font-bold text-slate-700">Sort by: Popularity</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredColleges.length > 0 ? (
                            filteredColleges.map((college, i) => (
                                <motion.div
                                    key={college.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
                                >
                                    <div className="h-56 relative overflow-hidden">
                                        <img src={college.image} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <Star className="text-yellow-400 fill-yellow-400" size={14} />
                                            <span className="text-xs font-bold text-slate-800">{college.rating}</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <span className="text-[10px] uppercase font-extrabold tracking-widest text-primary mb-2 block">{college.category}</span>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{college.name}</h3>
                                        <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-6">
                                            <MapPin size={14} />
                                            <span>{college.location}</span>
                                        </div>
                                        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase mb-0.5">Annual Fees</p>
                                                <span className="text-lg font-bold text-slate-900">{college.fees}</span>
                                            </div>
                                            <button className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-primary transition-all active:scale-90 shadow-lg">
                                                <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
                                <p className="text-slate-400">No colleges found matching your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CollegesPage
