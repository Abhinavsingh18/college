'use client'

import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { exams } from '@/data/mock'
import { ArrowRight, Calendar } from 'lucide-react'

const TopExams = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore Top Exams</h2>
                        <p className="text-slate-500">Stay updated with latest exam dates and notifications.</p>
                    </div>
                    <button className="text-primary font-bold flex items-center gap-2 hover:underline">
                        View All Exams <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exams.map((exam, i) => {
                        const IconComponent = (Icons as any)[exam.icon] || Icons.BookOpen
                        return (
                            <motion.div
                                key={exam.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-primary/10 transition-all cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <IconComponent size={24} />
                                    </div>
                                    <span className="text-[10px] uppercase font-extrabold tracking-widest px-2 py-1 rounded bg-orange-100 text-orange-600">
                                        {exam.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{exam.name}</h3>
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar size={14} />
                                    <span>{exam.date}</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TopExams
