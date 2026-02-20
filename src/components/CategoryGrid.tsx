'use client'

import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { categories } from '@/data/mock'
import { cn } from '@/lib/utils'

const CategoryGrid = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Find The Perfect College For You
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Explore diverse fields and find top-rated institutions tailored to your career aspirations.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {categories.map((cat, i) => {
                        const IconComponent = (Icons as any)[cat.icon] || Icons.Book
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <IconComponent size={24} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 group-hover:text-primary text-center">
                                        {cat.name}
                                    </span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CategoryGrid
