import { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, DollarSign, Users, Calendar, CheckCircle, Phone, ArrowRight, XCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Never Miss Another $10,000 Job - 24/7 Smart Answering Service",
  description: "Stop losing customers to competitors who answer first. Our voice assistants capture every lead 24/7, book appointments automatically, and ensure you never miss another high-value job opportunity.",
  keywords: ["never miss calls", "24/7 answering service", "contractor lead capture", "missed call solution", "automated appointment booking", "lead management system"],
};

export default function NeverMissCallsPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Capture Every Lead",
      description: "While you&apos;re on one job, we&apos;re booking the next five. Every call answered means every opportunity captured.",
    },
    {
      icon: Users,
      title: "Beat Competition Every Time",
      description: "Customers call the contractor who answers first. Be that contractor, even at 2 AM or during Sunday dinner.",
    },
    {
      icon: Calendar,
      title: "Automatic Scheduling",
      description: "Voice assistant books appointments directly into your calendar. Wake up to a full schedule.",
    },
    {
      icon: TrendingUp,
      title: "40% More Revenue",
      description: "Contractors using our system report 40% revenue increase just from capturing previously missed calls.",
    },
  ];

  const missedOpportunities = [
    {
      time: "Saturday 7:32 PM",
      type: "Emergency HVAC",
      value: "$8,500",
      outcome: "Called competitor instead",
    },
    {
      time: "Sunday 9:15 AM",
      type: "Bathroom Remodel",
      value: "$12,000",
      outcome: "Went to voicemail, never called back",
    },
    {
      time: "Friday 6:45 PM",
      type: "Full Rewiring",
      value: "$15,000",
      outcome: "You were driving, they found someone else",
    },
    {
      time: "Tuesday 2:30 PM",
      type: "Kitchen Plumbing",
      value: "$6,500",
      outcome: "On another job, lost to competitor",
    },
  ];

  const testimonials = [
    {
      quote: "Last month alone, we captured $47,000 in jobs that would have gone to voicemail. That&apos;s real money we were leaving on the table.",
      author: "Robert Chen",
      business: "Chen Plumbing & Heating",
      metric: "$47K in recovered revenue",
    },
    {
      quote: "A burst pipe call came in at 11 PM on Christmas Eve. Our voice assistant handled it, I showed up, made $3,500. Best Christmas bonus ever.",
      author: "Frank Williams",
      business: "Williams Emergency Services",
      metric: "24/7 emergency capture",
    },
    {
      quote: "I was skeptical until I saw the numbers. 98% answer rate vs my old 35%. That&apos;s 63% more opportunities to grow my business.",
      author: "Linda Martinez",
      business: "Martinez Electric",
      metric: "98% call answer rate",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-slate-800/40 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-24 h-24 rounded-2xl flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-green-400" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Never Miss Another
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                $10,000 Job
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              While you&apos;re on one job, we&apos;re booking the next five. 
              Smart voice assistants ensure you never lose another customer to a competitor who answered first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg font-bold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Capture Every Lead Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white text-lg px-8 py-4 rounded-xl transition-all border border-slate-600 font-semibold">
                Calculate Your Lost Revenue
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">98%</div>
                <div className="text-sm text-slate-400">Calls Answered</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">40%</div>
                <div className="text-sm text-slate-400">Revenue Increase</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-sm text-slate-400">Always Available</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">30sec</div>
                <div className="text-sm text-slate-400">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Lost Revenue Calculator */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Missed Calls
              <span className="text-red-400"> Actually Cost You</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every unanswered call is money walking out your door. Here&apos;s what you lost last week:
            </p>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Your Missed Opportunities Last Week</h3>
            <div className="space-y-4">
              {missedOpportunities.map((opp, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between bg-slate-800/50 rounded-lg p-4">
                  <div className="flex-1">
                    <p className="text-sm text-slate-400">{opp.time}</p>
                    <p className="font-semibold text-white">{opp.type}</p>
                  </div>
                  <div className="flex-1 mt-2 md:mt-0">
                    <p className="text-2xl font-bold text-red-400">{opp.value}</p>
                  </div>
                  <div className="flex-1 mt-2 md:mt-0">
                    <p className="text-sm text-slate-300">{opp.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-red-500/30">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-white">Total Lost Revenue:</p>
                <p className="text-3xl font-bold text-red-400">$42,500</p>
              </div>
              <p className="text-sm text-slate-400 mt-2">That&apos;s $170,000 per month going to your competitors</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-6">
              <XCircle className="h-8 w-8 text-red-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">65% of Callers</h3>
              <p className="text-slate-300">Never leave voicemails and won&apos;t call back</p>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-6">
              <AlertTriangle className="h-8 w-8 text-yellow-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">First to Answer Wins</h3>
              <p className="text-slate-300">78% hire the first contractor who picks up</p>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-6">
              <DollarSign className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Emergency Premium</h3>
              <p className="text-slate-300">After-hours calls pay 2-3x normal rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Turn Every Call Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Booked Revenue</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our voice assistants don&apos;t just answer—they qualify, quote, and book. 24/7/365.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">How We Capture Every Opportunity</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Instant Answer</h4>
                <p className="text-sm text-slate-300">Every call answered in 2 rings, 24/7</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Smart Qualification</h4>
                <p className="text-sm text-slate-300">Gathers project details and urgency</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Instant Booking</h4>
                <p className="text-sm text-slate-300">Schedules appointments on the spot</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">4</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Follow-Up</h4>
                <p className="text-sm text-slate-300">Confirms and reminds automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="py-20 bg-gradient-to-r from-green-600/10 to-emerald-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/80 backdrop-blur-sm border border-green-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Your Revenue Recovery Calculator
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-600">
                <span className="text-slate-300">Average missed calls per week:</span>
                <span className="text-2xl font-bold text-white">15</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-600">
                <span className="text-slate-300">Average job value:</span>
                <span className="text-2xl font-bold text-white">$2,500</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-600">
                <span className="text-slate-300">Conversion rate with our system:</span>
                <span className="text-2xl font-bold text-white">40%</span>
              </div>
              <div className="flex justify-between items-center py-4 bg-green-600/20 rounded-lg px-4 mt-6">
                <span className="text-lg font-semibold text-white">Monthly Revenue Recovery:</span>
                <span className="text-3xl font-bold text-green-400">+$60,000</span>
              </div>
            </div>
            <p className="text-center text-slate-400 mt-4">
              That&apos;s $720,000 in additional revenue per year
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Contractors Who Stopped Losing Money
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Stop Losing $60,000 Every Month
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Start capturing every opportunity. Set up in 5 minutes. See results today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Capturing Every Lead
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Calculate Your Recovery
            </button>
          </div>
          <p className="mt-6 text-green-100">
            30-day free trial • No credit card • Answer your next call in 5 minutes
          </p>
        </div>
      </section>
    </div>
  );
}