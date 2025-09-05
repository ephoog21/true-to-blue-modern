"use client";

import { motion } from "framer-motion";
import { PhoneMissed, Clock, Calculator, Users, AlertTriangle, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missing Customer Calls",
    description: "Every missed call is lost revenue. Customers call competitors when you can't answer.",
    stat: "61% of customers won't call back",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Clock,
    title: "No Family Time",
    description: "Constantly interrupted during dinner, weekends, and your kid's games.",
    stat: "Average tradesperson works 60+ hours",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Calculator,
    title: "Slow Quote Process",
    description: "By the time you send estimates, customers have already hired someone else.",
    stat: "48hr quote = 70% lost jobs",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Poor Follow-Up",
    description: "No time to nurture leads or follow up with past customers for repeat business.",
    stat: "80% of sales need 5+ follow-ups",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Overload",
    description: "Can't distinguish urgent calls from routine ones when you're on a job.",
    stat: "Only 15% of calls are true emergencies",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: TrendingDown,
    title: "Losing to Bigger Companies",
    description: "Large companies have call centers. You're trying to compete alone.",
    stat: "70% choose who answers first",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-slate-800/50 backdrop-blur-sm" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Real Cost of Being 
            <span className="text-red-400"> &quot;Always On Call&quot;</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            You started your business for freedom, but now you&apos;re a slave to your phone. 
            Sound familiar?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className={`${problem.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <problem.icon className={`h-6 w-6 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-slate-300 mb-3">{problem.description}</p>
                <div className="text-sm font-semibold text-red-400">
                  📊 {problem.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            This Isn&apos;t Sustainable
          </h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            You&apos;re burning out, your family barely sees you, and you&apos;re still losing business to companies 
            that simply answer their phones faster. There&apos;s a better way.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;