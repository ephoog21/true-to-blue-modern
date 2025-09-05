"use client";

import { motion } from "framer-motion";
import { Phone, Brain, Calendar, FileText, Bell, BarChart3, Shield, Zap } from "lucide-react";

const solutions = [
  {
    icon: Phone,
    title: "Professional Voice Assistant",
    description: "Answers every call with your business name and a friendly, professional greeting. Sounds just like your best receptionist.",
    highlight: "Never miss a call again",
  },
  {
    icon: Brain,
    title: "Intelligent Call Screening",
    description: "Determines which calls are urgent emergencies and which can wait. Only forwards true emergencies to you immediately.",
    highlight: "Focus on your current job",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Books appointments directly into your calendar. No more phone tag or double bookings.",
    highlight: "Save 2 hours daily",
  },
  {
    icon: FileText,
    title: "Instant Quote Generation",
    description: "Provides ballpark estimates instantly based on your pricing. Detailed quotes sent within minutes.",
    highlight: "Win more jobs",
  },
  {
    icon: Bell,
    title: "Lead Capture & Follow-Up",
    description: "Collects all customer information and follows up automatically. Turn inquiries into booked jobs.",
    highlight: "45% more conversions",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Track call volumes, conversion rates, and revenue opportunities. Make data-driven decisions.",
    highlight: "Grow smarter",
  },
  {
    icon: Shield,
    title: "After-Hours Coverage",
    description: "Professional service 24/7/365. Your business never sleeps, even when you do.",
    highlight: "Peace of mind",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Up and running in 5 minutes. No complex installation or training required.",
    highlight: "Start today",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your 24/7 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Virtual Office Manager</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            More than just an answering service. A complete business solution that runs itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 h-full">
                <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{solution.description}</p>
                <div className="text-sm font-semibold text-green-400">
                  ✓ {solution.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            See It In Action
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Watch how True To Blue handles real customer calls and transforms them into booked jobs.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            Watch Live Demo Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;