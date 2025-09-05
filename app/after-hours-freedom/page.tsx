import { Metadata } from "next";
import Link from "next/link";
import { Moon, Home, Heart, Clock, Shield, TrendingUp, CheckCircle, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "After-Hours Freedom - Finally Enjoy Evenings & Weekends Again",
  description: "Stop letting after-hours calls ruin family time. Smart voice assistants handle calls professionally while you enjoy dinner, weekends, and bedtime stories. Real emergencies reach you, everything else waits.",
  keywords: ["after hours answering service", "contractor work life balance", "evening call management", "weekend answering service", "family time for contractors", "24/7 business phone"],
};

export default function AfterHoursFreedomPage() {
  const benefits = [
    {
      icon: Home,
      title: "Be Present at Home",
      description: "No more stepping away from dinner or movie night. Your business runs while you're actually present with family.",
    },
    {
      icon: Heart,
      title: "Bedtime Without Interruptions",
      description: "Read stories, tuck kids in, have adult conversations - all without your phone ringing every 5 minutes.",
    },
    {
      icon: Shield,
      title: "Protected Weekends",
      description: "Saturdays at the park, Sundays at church, family BBQs - enjoy them fully while business continues professionally.",
    },
    {
      icon: Clock,
      title: "Real Rest = Better Work",
      description: "Proper rest means better decisions, safer work, and happier customers when you're back on Monday.",
    },
  ];

  const testimonials = [
    {
      quote: "I haven't missed a bedtime story in 6 months. My daughter actually knows who I am now. The business is thriving and my marriage is saved.",
      author: "Mike Patterson",
      business: "Patterson Plumbing",
      metric: "10+ hours/week with family",
    },
    {
      quote: "Last Thanksgiving, I actually ate dinner HOT. No calls, no interruptions. Just family. Yet I booked 3 emergency jobs for Black Friday.",
      author: "Sarah Mitchell",
      business: "Mitchell HVAC Solutions",
      metric: "Zero missed holidays",
    },
    {
      quote: "My wife cried when I told her about this system. We can finally plan date nights without me being on call. Revenue is up 40% too.",
      author: "Carlos Rivera",
      business: "Rivera Electric",
      metric: "Weekly date nights restored",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-slate-800/40 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-24 h-24 rounded-2xl flex items-center justify-center">
                <Moon className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Your Evenings Belong to 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Your Family Again
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Smart voice assistants answer after-hours calls professionally while you enjoy uninterrupted family time. 
              Real emergencies still reach you. Everything else waits till morning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg font-bold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Start Your Free 30-Day Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white text-lg px-8 py-4 rounded-xl transition-all border border-slate-600 font-semibold">
                See How It Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">7-10pm</div>
                <div className="text-sm text-slate-400">Family Time Protected</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">Weekends</div>
                <div className="text-sm text-slate-400">Actually Yours Again</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">95%</div>
                <div className="text-sm text-slate-400">Can Wait Till Morning</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-sm text-slate-400">Professional Coverage</div>
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
              The Hidden Cost of Being
              <span className="text-red-400"> &quot;Always Available&quot;</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              You started your business for freedom. Now you&apos;re a slave to your phone 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">What You&apos;re Missing</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Kids&apos; sports games interrupted by calls
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Date nights ruined by &quot;emergencies&quot;
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Family dinners with you on the phone
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Vacations that aren&apos;t really vacations
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Sunday mornings interrupted constantly
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Real Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-red-400">67%</div>
                  <p className="text-slate-400">Of contractors report family strain from after-hours calls</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400">82%</div>
                  <p className="text-slate-400">Never fully disconnect from work, even on vacation</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400">91%</div>
                  <p className="text-slate-400">Say constant availability is their #1 stress source</p>
                </div>
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
              Smart After-Hours Management That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Actually Works</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our voice assistant knows the difference between a burst pipe and a dripping faucet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">How It Works After Hours</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Customer Calls</h4>
                <p className="text-sm text-slate-300">Voice assistant answers professionally with your business name</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Smart Triage</h4>
                <p className="text-sm text-slate-300">Determines if it&apos;s a real emergency or can wait till morning</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Right Response</h4>
                <p className="text-sm text-slate-300">Emergencies forwarded, others booked for next business day</p>
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
              Contractors Who Got Their Lives Back
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Take Back Your Evenings Starting Tonight
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            30-day free trial. Set up in 5 minutes. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Free Trial Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Schedule a Demo
            </button>
          </div>
          <p className="mt-6 text-blue-100">
            No credit card required • Be home for dinner tonight
          </p>
        </div>
      </section>
    </div>
  );
}