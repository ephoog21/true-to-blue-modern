import { Metadata } from "next";
import Link from "next/link";
import { Check, X, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Simple, Transparent Pricing - True To Blue",
  description: "Affordable voice assistant pricing for trade professionals. No hidden fees, no contracts, cancel anytime. Start with a 30-day free trial.",
  keywords: ["contractor software pricing", "voice assistant cost", "trade business software pricing", "affordable contractor solutions"],
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$149",
      description: "Perfect for solo operators",
      features: [
        "Up to 100 calls/month",
        "24/7 voice assistant",
        "Basic scheduling",
        "Text confirmations",
        "Call transcriptions",
        "Mobile app access",
        "Email support",
      ],
      notIncluded: [
        "Custom integrations",
        "Multiple team members",
        "Advanced analytics",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$299",
      description: "For growing businesses",
      features: [
        "Up to 500 calls/month",
        "Everything in Starter",
        "Advanced scheduling",
        "Quote generation",
        "CRM integration",
        "3 team members",
        "Priority support",
        "Custom greetings",
        "Call routing rules",
      ],
      notIncluded: [
        "White label options",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "$599",
      description: "For established companies",
      features: [
        "Unlimited calls",
        "Everything in Professional",
        "Unlimited team members",
        "Advanced analytics",
        "Custom integrations",
        "API access",
        "Dedicated account manager",
        "Custom training",
        "White label options",
        "Priority phone support",
      ],
      notIncluded: [],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple Pricing, 
            <span className="text-blue-400"> Powerful Results</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
            No setup fees. No hidden charges. No contracts. Just honest pricing that scales with your business.
          </p>
          <div className="inline-flex items-center justify-center bg-green-500/20 border border-green-500/30 rounded-full px-6 py-2">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            <span className="text-green-400 font-semibold">30-day free trial • No credit card required</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-slate-800/50 backdrop-blur-sm border ${
                plan.popular ? "border-blue-500" : "border-slate-600"
              } rounded-xl p-8 ${plan.popular ? "scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start opacity-50">
                    <X className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-500">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            All Plans Include
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Free Setup</h3>
              <p className="text-sm text-slate-400">We handle everything</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Free Training</h3>
              <p className="text-sm text-slate-400">Learn in 30 minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Cancel Anytime</h3>
              <p className="text-sm text-slate-400">No contracts ever</p>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Large team? Multiple locations? Special requirements? Let&apos;s build something perfect for your business.
          </p>
          <button className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            <Phone className="mr-2 h-5 w-5" />
            Call 1-800-TRUE-BLUE
          </button>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Pricing Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">What happens after my free trial?</h3>
              <p className="text-slate-300">
                You&apos;ll only be charged if you decide to continue. We&apos;ll remind you 3 days before your trial ends.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Can I change plans anytime?</h3>
              <p className="text-slate-300">
                Yes! Upgrade or downgrade whenever you need. Changes take effect immediately and we&apos;ll prorate the difference.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">What if I go over my call limit?</h3>
              <p className="text-slate-300">
                We&apos;ll never cut off your service. Additional calls are just $0.50 each, or you can upgrade your plan.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Do you offer discounts?</h3>
              <p className="text-slate-300">
                Yes! Save 20% with annual billing, and we offer special rates for trade associations and multi-location businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}