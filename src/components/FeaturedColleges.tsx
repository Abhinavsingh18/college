'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, MapPin, ArrowRight } from 'lucide-react'
import { colleges } from '@/data/mock'
import Image from 'next/image'

const FeaturedColleges = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Featured Colleges
                        </h2>
                        <p className="text-slate-600">
                            Browse through our handpicked top-performing institutions.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                        View All Colleges <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {colleges.map((college, i) => (
                        <motion.div
                            key={college.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* College Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={college.image}
                                    alt={college.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                                    <span className="text-xs font-bold text-slate-800">{college.rating}</span>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                                        {college.category}
                                    </span>
                                </div>
                            </div>

                            {/* College Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-2 truncate group-hover:text-primary transition-colors">
                                    {college.name}
                                </h3>
                                <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                                    <MapPin size={14} />
                                    <span>{college.location}</span>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Average Fees</span>
                                        <span className="text-slate-900 font-bold">{college.fees}</span>
                                    </div>
                                    <button className="bg-slate-50 hover:bg-primary hover:text-white text-slate-600 p-2.5 rounded-xl transition-all active:scale-90">
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedColleges
