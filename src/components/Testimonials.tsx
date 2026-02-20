'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
    {
        name: 'Priya Dharshini',
        role: 'Engineering Student',
        text: 'EduPath provided a lot of information about colleges and courses that helped me move to the next step in my career. The counselor was very friendly and helpful.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
    },
    {
        name: 'Santhosh Kumar',
        role: 'Parent',
        text: 'The service is so smooth and fantastic. They have a lot of patience and it is very useful for parents and students to get course clarity.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    {
        name: 'Sahana Shree',
        role: 'MBA Aspirant',
        text: 'The counselor suggested one of the best colleges and helped me a lot during the process. It reduced my burden of finding my dream college.',
        rating: 4,
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop'
    }
]

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Students Love Us!</h2>
                    <p className="text-slate-500">Discover why thousands of students trust EduPath for their education journey.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative group hover:shadow-2xl transition-all"
                        >
                            <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} className={j < t.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"} />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-8 italic leading-relaxed text-lg">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-md" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
