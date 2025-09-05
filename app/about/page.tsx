import { Metadata } from "next";
import { Users, Target, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About True To Blue - Built By Contractors, For Contractors",
  description: "Learn how True To Blue helps trade professionals never miss another call. Our smart voice solutions are built by people who understand the unique challenges of running a trade business.",
  keywords: ["about True To Blue", "contractor software company", "trade business solutions", "voice assistant for contractors"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built By People Who 
            <span className="text-blue-400"> Get It</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We&apos;re not another tech company trying to sell you complicated software. 
            We understand trade businesses because we&apos;ve been there.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              True To Blue started when our founder, a second-generation plumber, watched his father miss 
              his sister&apos;s graduation because of emergency calls. He saw how technology could help but 
              found every solution was either too complex or didn&apos;t understand trade businesses.
            </p>
            <p>
              We built True To Blue to be different. No complicated setup. No tech jargon. No features 
              you&apos;ll never use. Just a simple, powerful solution that answers your calls professionally 
              while you focus on your craft.
            </p>
            <p>
              Today, we help over 15,000 trade professionals across America take back their lives while 
              growing their businesses. From solo operators to 50-person shops, we&apos;re proud to support 
              the hardworking people who keep America running.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center">
            <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Family First</h3>
            <p className="text-slate-300 text-sm">
              We believe you should be present for dinner, games, and bedtime stories.
            </p>
          </div>

          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center">
            <div className="bg-green-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Simple Solutions</h3>
            <p className="text-slate-300 text-sm">
              Technology should make your life easier, not give you another job to manage.
            </p>
          </div>

          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center">
            <div className="bg-purple-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real Support</h3>
            <p className="text-slate-300 text-sm">
              When you call us, you talk to real people who understand your business.
            </p>
          </div>

          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center">
            <div className="bg-yellow-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
            <p className="text-slate-300 text-sm">
              Our success is measured by your success. Period.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Trusted by Trade Professionals Nationwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15,000+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2.5M+</div>
              <div className="text-blue-100">Calls Handled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$47M+</div>
              <div className="text-blue-100">Revenue Generated</div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            To give every trade professional the tools they need to grow their business 
            without sacrificing their personal life. Because you deserve both success and 
            happiness.
          </p>
          <div className="inline-flex items-center justify-center bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl px-8 py-4">
            <p className="text-lg text-white font-semibold">
              &quot;We&apos;re True To Blue - True to our word, True to our customers, True to the trades.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}