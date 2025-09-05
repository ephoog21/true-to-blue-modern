import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MessageSquare, Clock, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact True To Blue - Get Your Free Business Assessment",
  description: "Contact True To Blue for a free assessment of your trade business. See how our smart voice solutions can help you never miss another call. Available 24/7 for support.",
  keywords: ["contact True To Blue", "trade business assessment", "contractor software support", "voice assistant demo"],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s Transform Your Business Together
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to stop missing calls and start growing? We&apos;re here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-slate-300">1-800-TRUE-BLUE</p>
                    <p className="text-sm text-slate-400">Monday-Friday 8am-8pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Support</h3>
                    <a href="mailto:support@truetoblue.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                      support@truetoblue.com
                    </a>
                    <p className="text-sm text-slate-400">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                    <p className="text-slate-300">Available on all pages</p>
                    <p className="text-sm text-slate-400">Instant response during business hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Headquarters</h3>
                    <p className="text-slate-300">Serving trade professionals nationwide</p>
                    <p className="text-sm text-slate-400">100% remote support available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Free Business Assessment
              </h3>
              <p className="text-blue-100 mb-6">
                Get a personalized report showing how much revenue you&apos;re losing to missed calls and how we can help.
              </p>
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Common Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">How quickly can I get started?</h3>
                <p className="text-slate-300">
                  Most trade professionals are up and running within 30 minutes. We handle all the setup and customization for your specific trade.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Do I need any technical knowledge?</h3>
                <p className="text-slate-300">
                  Not at all. If you can answer your phone, you can use our system. We handle all the technical aspects for you.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Can I try it before committing?</h3>
                <p className="text-slate-300">
                  Absolutely! We offer a 30-day free trial with no credit card required. See the results before you pay anything.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Will it work with my existing tools?</h3>
                <p className="text-slate-300">
                  Yes. We integrate with popular tools like QuickBooks, ServiceTitan, Jobber, and most scheduling software.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">What if I need help?</h3>
                <p className="text-slate-300">
                  We provide 24/7 support and dedicated onboarding. Your success is our success, and we&apos;re here whenever you need us.
                </p>
              </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center">
              <Clock className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Average Response Time</h3>
              <p className="text-3xl font-bold text-green-400">2 minutes</p>
              <p className="text-sm text-slate-400 mt-1">During business hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}