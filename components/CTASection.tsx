"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-90" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Take Back Your Life?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of trade professionals who&apos;ve already transformed their business 
            with smart voice technology. Set up in minutes, see results immediately.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-white">
              <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
              <span>5-minute setup</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-bold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Free Trial Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/schedule-demo"
              className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-xl transition-all font-semibold"
            >
              Schedule Personal Demo
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto"
          >
            <p className="text-white font-semibold mb-2">🎁 Limited Time Offer</p>
            <p className="text-blue-100">
              Sign up today and get your first 2 months at 50% off. 
              Plus, free onboarding and custom setup ($500 value).
            </p>
          </motion.div>

          <div className="mt-8 text-blue-100 text-sm">
            Questions? Call us at <span className="font-semibold text-white">1-800-TRUE-BLUE</span> or{" "}
            <Link href="/contact" className="underline hover:text-white transition-colors">
              chat with our team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;