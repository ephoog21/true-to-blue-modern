"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Clock, Calendar, DollarSign, ChevronRight, Moon, Wrench, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const heroContent = [
  {
    headline: "Finally, Your Evenings Are Yours Again",
    subheadline: "Family dinner without phone interruptions",
    description: "Smart voice assistants answer after-hours calls professionally while you enjoy uninterrupted time with family. Real emergencies reach you, everything else waits till morning.",
    icon: Moon,
    ctaText: "Get Your Evenings Back",
    ctaLink: "/after-hours-freedom",
    stat: "10hrs",
    statLabel: "Family Time Per Week",
  },
  {
    headline: "Focus on the Job, Not the Phone",
    subheadline: "Complete work without constant interruptions",
    description: "Stay focused on precision work while our voice assistant handles every call professionally. Better work quality, happier customers, more referrals.",
    icon: Wrench,
    ctaText: "Work Without Distractions",
    ctaLink: "/focus-on-work",
    stat: "45%",
    statLabel: "Faster Job Completion",
  },
  {
    headline: "Never Miss Another $10,000 Job",
    subheadline: "Every call answered, every opportunity captured",
    description: "While you&apos;re on one job, we&apos;re booking the next five. Smart voice assistants ensure you never lose another customer to a competitor who answered first.",
    icon: TrendingUp,
    ctaText: "Capture Every Lead",
    ctaLink: "/never-miss-calls",
    stat: "98%",
    statLabel: "Call Answer Rate",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const current = heroContent[currentSlide];

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-800/40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-500/20 w-20 h-20 rounded-2xl flex items-center justify-center">
                  <current.icon className="h-10 w-10 text-blue-400" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                {current.headline}
              </h1>
              <p className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 font-semibold">
                {current.subheadline}
              </p>
              <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? "w-8 bg-blue-400" 
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              href={current.ctaLink}
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              {current.ctaText}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white text-lg px-8 py-4 rounded-xl transition-all border border-slate-600 font-semibold"
            >
              Start Free Trial
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-slate-400"
          >
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-green-400" />
              Set up in 5 minutes
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-green-400" />
              30-day free trial
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-green-400" />
              No credit card required
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-blue-500/20">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">{current.stat}</div>
            <div className="text-slate-400">{current.statLabel}</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-slate-400">Always Available</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">30s</div>
            <div className="text-slate-400">Response Time</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">$0</div>
            <div className="text-slate-400">Setup Cost</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;