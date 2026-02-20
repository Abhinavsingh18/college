'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, LogIn, Github, Chrome } from 'lucide-react'

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X size={20} className="text-slate-400" />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <LogIn size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                {isLogin ? 'Welcome Back' : 'Join EduPath'}
                            </h2>
                            <p className="text-slate-500 text-sm mt-1">
                                {isLogin ? 'Login to access your applications' : 'Sign up to start your journey'}
                            </p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
                                    />
                                </div>
                            </div>

                            {isLogin && (
                                <div className="flex justify-end">
                                    <button type="button" className="text-sm text-primary font-semibold hover:underline">
                                        Forgot Password?
                                    </button>
                                </div>
                            )}

                            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 mt-4">
                                {isLogin ? 'Sign In' : 'Create Account'}
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold">Or continue with</span></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-semibold text-slate-700">
                                <Chrome size={18} /> Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-semibold text-slate-700">
                                <Github size={18} /> Github
                            </button>
                        </div>

                        <p className="text-center text-slate-500 text-sm mt-8">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 text-primary font-bold hover:underline"
                            >
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default LoginModal
