import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedColleges from '@/components/FeaturedColleges'
import TopExams from '@/components/TopExams'
import LatestNews from '@/components/LatestNews'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import { ArrowRight, CheckCircle2, MessageSquare, Award } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />

      {/* Search Result / Stats teaser */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl p-8 shadow-2xl grid md:grid-cols-3 gap-8 border border-white/20 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">25,000+</p>
              <p className="text-slate-500 text-sm">Top Colleges</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Award size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-slate-500 text-sm">Entrance Exams</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
              <MessageSquare size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">100k+</p>
              <p className="text-slate-500 text-sm">Verified Reviews</p>
            </div>
          </div>
        </div>
      </div>

      <CategoryGrid />

      <TopExams />

      {/* Featured CTA */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-orange-400 rounded-[2rem] p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              India's Largest Common Application Form
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Applying to your dream colleges made easy! Apply to multiple colleges with a single application form and get dedicated support from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group shadow-xl">
                Apply via EduPath <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <button className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                Talk to Expert
              </button>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 blur-[100px] -rotate-45 translate-x-1/2" />
        </div>
      </section>

      <FeaturedColleges />

      <LatestNews />

      {/* Info Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden p-4 relative z-10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1523240715638-751bd08851b5?q=80&w=800&auto=format&fit=crop"
                alt="Students studying"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0" />
          </div>

          <div>
            <span className="text-primary font-extrabold text-sm uppercase tracking-widest mb-4 block">Personalized Support</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Let EduPath find the perfect match for you.
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: 'Career Compass Quiz',
                  desc: 'Take our free personality quiz and discover career paths that align with your natural strengths.'
                },
                {
                  title: 'Expert Counseling',
                  desc: 'Get 1-on-1 personalized guidance on colleges, courses, and scholarships from EduPath experts.'
                },
                {
                  title: 'Seamless Applications',
                  desc: 'Manage all your admissions, documents, and rewards in one unified EduPath dashboard.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer />
    </main>
  )
}
