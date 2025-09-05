import { Metadata } from "next";
import Link from "next/link";
import { Wrench, Clock, Shield, TrendingUp, CheckCircle, Phone, ArrowRight, AlertTriangle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Focus on Your Work, Not the Phone - Smart Call Management for Contractors",
  description: "Stop losing focus on dangerous precision work. Voice assistants handle every call professionally while you concentrate on quality craftsmanship. Better work, safer jobsites, happier customers.",
  keywords: ["contractor call management", "jobsite productivity", "work focus solutions", "contractor efficiency", "voice answering service", "construction productivity"],
};

export default function FocusOnWorkPage() {
  const benefits = [
    {
      icon: Wrench,
      title: "Complete Precision Work",
      description: "Wire panels, plumb fixtures, install HVAC—all without phone interruptions breaking your concentration.",
    },
    {
      icon: Shield,
      title: "Safer Job Sites",
      description: "No more dangerous distractions on ladders, roofs, or with power tools. Focus means safety.",
    },
    {
      icon: Clock,
      title: "45% Faster Completion",
      description: "Jobs that took 6 hours now take 4. No stopping and starting means better workflow.",
    },
    {
      icon: TrendingUp,
      title: "Higher Quality Results",
      description: "Uninterrupted focus means fewer mistakes, better craftsmanship, and happier customers who refer you.",
    },
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      problem: "Constant Interruptions",
      impact: "15-20 calls per day breaking concentration",
      cost: "$2,800/month in lost productivity",
    },
    {
      icon: XCircle,
      problem: "Dangerous Distractions",
      impact: "Phone rings while on ladder or using saw",
      cost: "1 in 4 accidents from distraction",
    },
    {
      icon: Clock,
      problem: "Restart Time Waste",
      impact: "20 minutes to refocus after each call",
      cost: "3+ hours daily just getting back on track",
    },
  ];

  const testimonials = [
    {
      quote: "I installed an entire HVAC system without a single interruption. First time in 15 years. The quality difference was night and day.",
      author: "Tom Richards",
      business: "Richards Heating & Cooling",
      metric: "45% faster installations",
    },
    {
      quote: "No more climbing down from the roof 10 times a day. I&apos;m safer, faster, and my work quality has never been better.",
      author: "Jake Morrison",
      business: "Morrison Roofing",
      metric: "Zero jobsite phone accidents",
    },
    {
      quote: "I can finally focus on electrical work that requires total concentration. My callback rate dropped 70% in 3 months.",
      author: "Maria Gonzalez",
      business: "Precision Electric",
      metric: "70% fewer callbacks",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-slate-800/40 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 w-24 h-24 rounded-2xl flex items-center justify-center">
                <Wrench className="h-12 w-12 text-orange-400" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Finally Focus on the 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Work That Matters
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Complete precision work without constant phone interruptions. 
              Voice assistants handle every call professionally while you deliver quality craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg font-bold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Start Working Uninterrupted
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white text-lg px-8 py-4 rounded-xl transition-all border border-slate-600 font-semibold">
                See It In Action
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-orange-400 mb-1">45%</div>
                <div className="text-sm text-slate-400">Faster Job Completion</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-orange-400 mb-1">70%</div>
                <div className="text-sm text-slate-400">Fewer Callbacks</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-orange-400 mb-1">3hrs</div>
                <div className="text-sm text-slate-400">Saved Daily</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-orange-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Calls Answered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The True Cost of
              <span className="text-red-400"> Constant Interruptions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every phone call doesn&apos;t just steal 5 minutes—it destroys your focus for 20 more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{point.problem}</h3>
                <p className="text-slate-300 mb-2">{point.impact}</p>
                <p className="text-red-400 font-bold">{point.cost}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">What Interruptions Really Cost You</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Quality Issues:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Measurement errors from lost concentration
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Forgotten steps requiring callbacks
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Rushed work to make up lost time
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Safety Risks:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Distraction while using power tools
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Rushing to answer while on ladders
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Mental fatigue from constant switching
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Work in Your Zone.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> We Handle the Rest.</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional voice assistants manage every call while you deliver exceptional work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Your New Workday Flow</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Start Your Work</h4>
                <p className="text-sm text-slate-300">Focus completely on the task at hand</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Calls Handled Automatically</h4>
                <p className="text-sm text-slate-300">Voice assistant books appointments, answers questions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Review at Your Convenience</h4>
                <p className="text-sm text-slate-300">Check messages between jobs or at day&apos;s end</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Contractors Who Found Their Focus
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <p className="text-slate-300 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="border-t border-slate-600 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.business}</p>
                  <p className="text-green-400 font-bold mt-2">{testimonial.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Delivering Your Best Work Today
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            30-day free trial. Set up in 5 minutes. Focus from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Uninterrupted Focus
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Watch Demo
            </button>
          </div>
          <p className="mt-6 text-orange-100">
            No credit card required • Complete your next job without interruption
          </p>
        </div>
      </section>
    </div>
  );
}