'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { news } from '@/data/mock'
import { ArrowRight, Clock } from 'lucide-react'

const LatestNews = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Education News</h2>
                    <p className="text-slate-500">Stay ahead with the latest updates in the education world.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group cursor-pointer"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 bg-primary/10 rounded">
                                        {item.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-slate-400 text-[10px] font-medium">
                                        <Clock size={12} />
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto active:scale-95">
                        Read More Articles <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default LatestNews
