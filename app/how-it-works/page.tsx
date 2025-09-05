import { Metadata } from "next";
import Link from "next/link";
import { Phone, Settings, Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works - Simple Setup, Powerful Results",
  description: "See how True To Blue's voice assistant works for trade professionals. From setup to your first answered call in under 30 minutes. No technical knowledge required.",
  keywords: ["how voice assistant works", "contractor software setup", "trade business automation", "phone answering system"],
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Quick Setup Call",
      description: "We learn about your business, services, pricing, and how you want calls handled. Takes about 15 minutes.",
      icon: Phone,
      details: [
        "Tell us your trade and services",
        "Share your service area",
        "Explain your pricing structure",
        "Define emergency vs routine",
      ],
    },
    {
      number: "02",
      title: "Custom Configuration",
      description: "We configure your voice assistant with your business details, creating a professional phone presence.",
      icon: Settings,
      details: [
        "Professional greeting with your name",
        "Service menu customization",
        "Scheduling preferences",
        "Emergency routing rules",
      ],
    },
    {
      number: "03",
      title: "Instant Activation",
      description: "Forward your calls to your new number or port your existing number. You're live in minutes.",
      icon: Zap,
      details: [
        "Simple call forwarding setup",
        "Keep your existing number",
        "Test with our team",
        "Go live immediately",
      ],
    },
    {
      number: "04",
      title: "Watch Business Grow",
      description: "Every call gets answered professionally. You get summaries, appointments booked, and more time for life.",
      icon: TrendingUp,
      details: [
        "Real-time call notifications",
        "Daily summary reports",
        "Appointment calendar sync",
        "Revenue tracking dashboard",
      ],
    },
  ];

  const features = [
    {
      title: "Your Calls Get Answered",
      description: "Customer calls your regular number, gets professional service instantly",
    },
    {
      title: "Smart Conversation Happens",
      description: "Voice assistant determines needs, urgency, and collects all details",
    },
    {
      title: "Appointments Get Booked",
      description: "Schedule directly into your calendar with proper time buffers",
    },
    {
      title: "Quotes Get Delivered",
      description: "Standard services receive instant estimates based on your pricing",
    },
    {
      title: "You Get Notified",
      description: "Urgent calls forwarded, others summarized for your review",
    },
    {
      title: "Customers Stay Happy",
      description: "Professional service 24/7 keeps them loyal and referring others",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            From Missed Calls to 
            <span className="text-blue-400"> Booked Jobs</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how easy it is to never miss another opportunity. No complex setup, no training required.
          </p>
        </div>

        {/* Setup Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Four Simple Steps to Success
          </h2>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-5xl font-bold text-blue-400/30 mr-4">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-lg text-slate-300 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-sm border border-slate-600">
                    <step.icon className="h-24 w-24 text-blue-400 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Calls Work */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Every Call, Handled Perfectly
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Example Scenarios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Real Examples, Real Results
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Emergency at 2 AM</h3>
              <p className="text-slate-300 mb-4">
                Burst pipe flooding a basement. System identifies emergency, forwards call immediately to your emergency line.
              </p>
              <p className="text-green-400 font-semibold">
                Result: You handle real emergencies, sleep through the rest
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Quote Request at Lunch</h3>
              <p className="text-slate-300 mb-4">
                Customer needs bathroom remodel quote. System provides estimate range, books consultation for detailed quote.
              </p>
              <p className="text-green-400 font-semibold">
                Result: Customer gets instant response, you get qualified lead
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Maintenance During Job</h3>
              <p className="text-slate-300 mb-4">
                Regular customer needs annual service. System checks your calendar, books appointment with travel time buffer.
              </p>
              <p className="text-green-400 font-semibold">
                Result: Appointment booked without interrupting current job
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">After Storm Rush</h3>
              <p className="text-slate-300 mb-4">
                50 calls in an hour after hail storm. System captures every lead, prioritizes by damage severity.
              </p>
              <p className="text-green-400 font-semibold">
                Result: Every opportunity captured, organized by priority
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Watch a real demo of the system handling calls for your specific trade. 
            See exactly how it will work for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Watch 2-Minute Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}