"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Clock, Calendar, DollarSign, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-800/40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Phone Rings,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                We Answer Professionally
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Smart voice assistants that keep your leads warm while you focus on the job. 
              Never miss another opportunity to grow your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Your Free Trial
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white text-lg px-8 py-4 rounded-xl transition-all border border-slate-600 font-semibold"
            >
              Watch 2-Minute Demo
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
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-slate-400">Call Answer Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">45%</div>
            <div className="text-slate-400">More Booked Jobs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">10hrs</div>
            <div className="text-slate-400">Saved Per Week</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-slate-400">Always Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;