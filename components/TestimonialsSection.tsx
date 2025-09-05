"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mike Rodriguez",
    business: "Rodriguez Plumbing",
    location: "Austin, TX",
    rating: 5,
    text: "Game changer! I'm booking 40% more jobs and finally have weekends with my kids. The voice assistant handles everything perfectly while I'm under houses fixing pipes.",
    revenue: "+$8,500/month",
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Sarah Chen",
    business: "Bright Spark Electrical",
    location: "Seattle, WA",
    rating: 5,
    text: "Best investment I've made in my business. No more missed calls at 2 AM, and customers love the instant response. My wife says she finally got her husband back.",
    revenue: "+$12,000/month",
    image: "/images/testimonial-2.jpg",
  },
  {
    name: "Tom Williams",
    business: "Cool Breeze HVAC",
    location: "Phoenix, AZ",
    rating: 5,
    text: "During our busy season, this system is a lifesaver. It handles the call volume of 3 receptionists. I focus on repairs while it books appointments and sends quotes.",
    revenue: "+$15,000/month",
    image: "/images/testimonial-3.jpg",
  },
];

const stats = [
  { value: "15,000+", label: "Trade Professionals Served" },
  { value: "2.5M+", label: "Calls Handled" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "$47M+", label: "Revenue Generated" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-slate-800/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Results from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Real Professionals</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See what trade professionals are saying about True To Blue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 h-full">
                <Quote className="h-8 w-8 text-blue-400/30 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t border-slate-600 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.business}</p>
                      <p className="text-xs text-slate-500">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-400">Revenue increase:</p>
                      <p className="text-lg font-bold text-green-400">{testimonial.revenue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-slate-700"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-6">Trusted by leading trade organizations</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            <div className="text-2xl font-bold text-slate-500">PHCC</div>
            <div className="text-2xl font-bold text-slate-500">NECA</div>
            <div className="text-2xl font-bold text-slate-500">ACCA</div>
            <div className="text-2xl font-bold text-slate-500">ABC</div>
            <div className="text-2xl font-bold text-slate-500">NAHB</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;