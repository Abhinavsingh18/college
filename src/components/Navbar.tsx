'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X, User, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import LoginModal from './LoginModal'

const navItems = [
    {
        name: 'Colleges',
        links: ['Engineering', 'Management', 'Medical', 'Law', 'Commerce']
    },
    {
        name: 'Courses',
        links: ['B.Tech', 'MBA', 'MBBS', 'B.Sc', 'B.Com']
    },
    {
        name: 'Exams',
        links: ['JEE Main', 'CAT 2024', 'NEET 2024', 'GATE 2024']
    },
    {
        name: 'Study Abroad',
        links: ['USA', 'UK', 'Canada', 'Australia', 'Germany']
    }
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
                    isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-white text-xl font-bold">EP</span>
                        </div>
                        <span className={cn(
                            "text-2xl font-bold tracking-tight",
                            isScrolled ? "text-slate-900" : "text-white"
                        )}>
                            Edu<span className="text-primary">Path</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={cn(
                                        "text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 py-4",
                                        isScrolled ? "text-slate-600" : "text-slate-100"
                                    )}
                                >
                                    {item.name}
                                    <ChevronDown size={14} className={cn("transition-transform", activeDropdown === item.name && "rotate-180")} />
                                </button>

                                {/* Dropdown Menu */}
                                {activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {item.links.map((link) => (
                                            <Link
                                                key={link}
                                                href="/colleges"
                                                className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
                                            >
                                                {link}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <button className={cn(
                            "p-2 rounded-full hover:bg-slate-100 transition-colors",
                            isScrolled ? "text-slate-600" : "text-white"
                        )}>
                            <Search size={20} />
                        </button>

                        <button
                            onClick={() => setIsLoginOpen(true)}
                            className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg active:scale-95"
                        >
                            <User size={18} />
                            Login
                        </button>

                        <button
                            className="lg:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className={isScrolled ? "text-slate-900" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 animate-in slide-in-from-top duration-300">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <div key={item.name} className="flex flex-col gap-2">
                                    <span className="text-slate-900 font-bold text-sm px-2 uppercase tracking-widest">{item.name}</span>
                                    {item.links.map(link => (
                                        <Link
                                            key={link}
                                            href="#"
                                            className="text-slate-600 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                            <button
                                onClick={() => { setIsMobileMenuOpen(false); setIsLoginOpen(true); }}
                                className="bg-primary text-white py-3 rounded-xl font-bold shadow-lg"
                            >
                                Login / Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    )
}

export default Navbar
