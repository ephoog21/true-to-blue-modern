"use client";

import { motion } from "framer-motion";
import { MessageSquare, Clock, DollarSign, Users, TrendingUp, Heart } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Our voice assistant doesn't sound like a robot. It has natural conversations that build trust with your customers.",
    image: "/images/conversation.jpg",
  },
  {
    icon: Clock,
    title: "Time Freedom",
    description: "Spend uninterrupted time on job sites. Be present at family dinners. Take weekends off. We've got your calls covered.",
    image: "/images/family-time.jpg",
  },
  {
    icon: DollarSign,
    title: "Revenue Growth",
    description: "Convert more leads with instant response times. Book more jobs. Increase average ticket size with upsells.",
    image: "/images/revenue.jpg",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Customers love the instant response and professional service. Watch your reviews and referrals skyrocket.",
    image: "/images/satisfaction.jpg",
  },
  {
    icon: TrendingUp,
    title: "Business Insights",
    description: "Know exactly where your leads come from, peak call times, and conversion rates. Make smarter business decisions.",
    image: "/images/analytics.jpg",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description: "Sleep soundly knowing every call is handled professionally. No more anxiety about missing opportunities.",
    image: "/images/peace.jpg",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-slate-800/30" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for How You 
            <span className="text-blue-400"> Actually Work</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We understand the unique challenges of running a trade business. Our solution is designed specifically for you.
          </p>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-lg text-slate-300 mb-6">{feature.description}</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">Customized for your business</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">No technical knowledge required</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">Integrates with your existing tools</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-2xl opacity-20" />
                  <div className="relative bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8">
                    <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-20 w-20 text-slate-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;