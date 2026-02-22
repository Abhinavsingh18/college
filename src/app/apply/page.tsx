'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight, ArrowLeft, GraduationCap, MapPin, User, Phone, Mail, BookOpen, Sparkles } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const MultiStepForm = () => {
    const [step, setStep] = useState(1)
    const totalSteps = 3

    const StepContent = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-primary/10 outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Mobile Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input type="tel" placeholder="+91 9876543210" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-primary/10 outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-primary/10 outline-none" />
                            </div>
                        </div>
                    </motion.div>
                )
            case 2:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Current Qualification</label>
                            <div className="relative">
                                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <select className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-primary/10 outline-none appearance-none">
                                    <option>12th Pass</option>
                                    <option>Graduate</option>
                                    <option>Post Graduate</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Course Interested In</label>
                            <div className="relative">
                                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <select className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-primary/10 outline-none appearance-none">
                                    <option>B.Tech / B.E</option>
                                    <option>MBA / PGDM</option>
                                    <option>MBBS / BDS</option>
                                    <option>B.Com / M.Com</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>
                )
            case 3:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="text-center py-10"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 size={48} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Ready to Submit!</h3>
                        <p className="text-slate-500 max-w-sm mx-auto">
                            You're just one click away from reaching your dream colleges. Our experts will contact you within 24 hours.
                        </p>
                    </motion.div>
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <Navbar />
            <div className="max-w-3xl mx-auto px-4">
                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between mb-4">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex flex-col items-center gap-2">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-primary text-white shadow-lg' : 'bg-white text-slate-300 border border-slate-100'
                                    }`}>
                                    {step > s ? <CheckCircle2 size={20} /> : s}
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= s ? 'text-primary' : 'text-slate-300'
                                    }`}>
                                    {s === 1 ? 'Personal' : s === 2 ? 'Education' : 'Review'}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: '0%' }}
                            animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                <div className="bg-white rounded-[3rem] shadow-2xl p-8 lg:p-12 border border-slate-100 relative overflow-hidden">
                    {/* AI Strength Meter */}
                    <div className="absolute top-6 right-8 hidden md:flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="text-right">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Profile Strength</p>
                            <p className="text-lg font-bold text-primary">{Math.round((step / totalSteps) * 100)}%</p>
                        </div>
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-200" />
                                <motion.circle
                                    cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="4"
                                    className="text-primary"
                                    strokeDasharray="125.6"
                                    initial={{ strokeDashoffset: 125.6 }}
                                    animate={{ strokeDashoffset: 125.6 - (125.6 * (step / totalSteps)) }}
                                    transition={{ duration: 0.8 }}
                                />
                            </svg>
                            <Sparkles className="absolute text-primary animate-pulse" size={16} />
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <GraduationCap size={200} />
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Common Application Form</h1>
                        <p className="text-slate-500 mb-10">Apply to 2000+ top colleges with one single application.</p>

                        <AnimatePresence mode="wait">
                            <StepContent />
                        </AnimatePresence>

                        <div className="flex gap-4 mt-12">
                            {step > 1 && (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="flex-1 py-4 px-6 border border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <ArrowLeft size={18} /> Previous
                                </button>
                            )}
                            <button
                                onClick={() => step < 3 && setStep(step + 1)}
                                className="flex-[2] py-4 px-6 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                {step === 3 ? 'Submit Application' : 'Next Step'} <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MultiStepForm
