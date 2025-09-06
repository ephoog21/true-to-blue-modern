"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Zap, Wind, Trees, Hammer, Home, Car, HardHat, Paintbrush, Settings } from "lucide-react";

const trades = [
  {
    icon: Wrench,
    name: "Plumbers",
    href: "/trades/plumbers",
    description: "Handle emergency calls, schedule repairs, and manage service requests",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    name: "Electricians",
    href: "/trades/electricians",
    description: "Prioritize electrical emergencies and book routine installations",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Wind,
    name: "HVAC Technicians",
    href: "/trades/hvac",
    description: "Manage seasonal demand and emergency heating/cooling calls",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Trees,
    name: "Landscapers",
    href: "/trades/landscaping",
    description: "Book recurring maintenance and seasonal services",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Hammer,
    name: "Carpenters",
    href: "/trades/carpenters",
    description: "Quote custom projects and schedule consultations",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Home,
    name: "Garage Door Repair",
    href: "/trades/garage-door-repair",
    description: "Respond to emergency repairs and routine maintenance",
    color: "from-gray-500 to-slate-500",
  },
  {
    icon: Car,
    name: "Auto Repair",
    href: "/trades/auto-repair",
    description: "Schedule appointments and provide service estimates",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: HardHat,
    name: "Roofers",
    href: "/trades/roofers",
    description: "Handle storm damage calls and schedule inspections",
    color: "from-slate-500 to-gray-500",
  },
  {
    icon: Paintbrush,
    name: "Painters",
    href: "/trades/painters",
    description: "Quote projects and schedule interior/exterior work",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Settings,
    name: "General Contractors",
    href: "/trades/general-contractors",
    description: "Manage multiple trades and complex project inquiries",
    color: "from-indigo-500 to-purple-500",
  },
];

const TradesSection = () => {
  return (
    <section className="py-20" id="trades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tailored Solutions for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Every Trade</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We understand each trade has unique needs. Our system adapts to your specific business requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trades.map((trade, index) => (
            <motion.div
              key={trade.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={trade.href} className="block group">
                <div className="relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${trade.color} opacity-20 rounded-full -mr-16 -mt-16 group-hover:opacity-30 transition-opacity`} />
                  <div className={`bg-gradient-to-br ${trade.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <trade.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {trade.name}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {trade.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn more
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">Don&apos;t see your trade listed?</p>
          <Link
            href="/contact"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            Contact us for a custom solution
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TradesSection;