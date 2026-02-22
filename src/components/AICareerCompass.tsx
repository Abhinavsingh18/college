'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, BrainCircuit, Target, Lightbulb, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

const AICareerCompass = () => {
    const [step, setStep] = useState(0)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<any>(null)

    const handlePredict = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setResult({
                career: 'Data Science & AI Engineering',
                match: '98%',
                reason: 'Your interest in mathematics and logical problem-solving aligns perfectly with the current industry demand for AI experts.',
                recommendation: 'IIT Madras (B.Tech AI), BITS Pilani (Computer Science)'
            })
            setStep(1)
        }, 2500)
    }

    return (
        <section className="py-24 relative overflow-hidden bg-slate-900">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
                        >
                            <Sparkles className="text-primary" size={16} />
                            <span className="text-primary font-bold text-xs uppercase tracking-widest">Next-Gen AI Analysis</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                            Predict Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                                Future Success
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
                            Our advanced neural engine analyzes your interests, skills, and academic history to find your perfect career path and top matching colleges.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: BrainCircuit, title: 'Neural Analysis', desc: 'Deep learning matches your profile with 50,000+ career data points.' },
                                { icon: Target, title: 'Precision Targeting', desc: '98.4% accuracy in predicting placement success for predicted courses.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Card */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                {step === 0 && !loading && (
                                    <motion.div
                                        key="input"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-8"
                                    >
                                        <div className="text-center mb-10">
                                            <h3 className="text-2xl font-bold text-white mb-2">Configure Your Engine</h3>
                                            <p className="text-slate-500 text-sm italic">Input your core parameters for analysis</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-3">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex justify-between">
                                                    Interest Area <span>Machine Learning</span>
                                                </label>
                                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary w-[75%] rounded-full shadow-[0_0_20px_rgba(255,107,0,0.5)]" />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex justify-between">
                                                    Logical Reasoning <span>Advanced</span>
                                                </label>
                                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-orange-500 w-[90%] rounded-full" />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4 pt-4">
                                                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center cursor-pointer hover:bg-white/10 transition-all">
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Last Mock Score</p>
                                                    <p className="text-xl font-bold text-white">99.2 %</p>
                                                </div>
                                                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center cursor-pointer hover:bg-white/10 transition-all">
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Target Year</p>
                                                    <p className="text-xl font-bold text-white">2024</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handlePredict}
                                            className="w-full bg-primary text-white py-6 rounded-[2rem] font-bold text-lg shadow-2xl shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden group"
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                            <span className="relative z-10 flex items-center gap-2">
                                                Start AI Prediction <ArrowRight size={20} />
                                            </span>
                                        </button>
                                    </motion.div>
                                )}

                                {loading && (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center py-20 text-center"
                                    >
                                        <div className="relative mb-8">
                                            <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                                            <BrainCircuit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 animate-pulse">Analyzing Future States...</h3>
                                        <div className="space-y-3 w-full max-w-xs opacity-50">
                                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-primary"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    transition={{ duration: 2.5 }}
                                                />
                                            </div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Neural Matching Engine v2.4.0</p>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 1 && (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center"
                                    >
                                        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Our Prediction</p>
                                        <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">{result.career}</h3>

                                        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl mb-8">
                                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{result.reason}</p>
                                            <div className="flex justify-center gap-10">
                                                <div className="text-center">
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Match Index</p>
                                                    <p className="text-2xl font-bold text-primary">{result.match}</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Reliability</p>
                                                    <p className="text-2xl font-bold text-green-500">High</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-left ml-4">Recommended Institutions</p>
                                            <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl text-white font-semibold text-sm">
                                                {result.recommendation}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => window.location.href = '/apply'}
                                            className="w-full mt-10 bg-white text-slate-900 py-5 rounded-[2rem] font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group"
                                        >
                                            Apply Now to These Colleges <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Decorative Glitch Effect Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[60px] pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AICareerCompass
