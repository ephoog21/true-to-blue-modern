"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface TradeLandingProps {
  trade: string;
  headline: string;
  subheadline: string;
  painPoints: Array<{
    title: string;
    description: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  testimonial: {
    text: string;
    author: string;
    business: string;
    location: string;
    metric: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  icon: ReactNode;
  color: string;
}

const TradeLandingTemplate = ({
  trade,
  headline,
  subheadline,
  painPoints,
  benefits,
  features,
  testimonial,
  faqs,
  icon,
  color,
}: TradeLandingProps) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${color} rounded-2xl mb-6`}>
              {icon}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {headline}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white text-lg px-8 py-4 rounded-xl transition-all border border-slate-600 font-semibold"
              >
                Watch Demo for {trade}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              We Understand Your Daily Struggles
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Running a {trade.toLowerCase()} business means dealing with these challenges every single day:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-red-500/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-slate-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transform Your {trade} Business
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Here&apos;s what changes when you have a professional voice assistant handling your calls:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-green-500/20 rounded-lg p-2 mr-4 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Features Built for {trade}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to run your {trade.toLowerCase()} business more efficiently:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/30 to-blue-600/30 rounded-2xl p-8 md:p-12 border border-blue-500/50"
          >
            <div className="text-center">
              <p className="text-2xl text-white mb-6 italic">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-semibold text-white text-lg">{testimonial.author}</p>
              <p className="text-slate-400">{testimonial.business} • {testimonial.location}</p>
              <p className="text-green-400 font-bold mt-2">{testimonial.metric}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Common Questions from {trade}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your {trade} Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of {trade.toLowerCase()} who never miss another call
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg font-bold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Your Free 30-Day Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="mt-4 text-slate-300">No credit card required • Set up in 5 minutes</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TradeLandingTemplate;